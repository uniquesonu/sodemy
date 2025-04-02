import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const reorderSchema = z.object({
  list: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
    })
  ),
});

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { list } = reorderSchema.parse(body);

    const course = await prisma.course.findUnique({
      where: {
        id: params.courseId,
      },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    if (course.instructorId !== session.user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Update the order of each chapter in a transaction
    await prisma.$transaction(
      list.map((item) =>
        prisma.chapter.update({
          where: {
            id: item.id,
          },
          data: {
            order: item.order,
          },
        })
      )
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
} 