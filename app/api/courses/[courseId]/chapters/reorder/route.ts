import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

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
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const course = await prisma.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        chapters: true,
      },
    });

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    // Verify ownership
    if (course.instructorId !== session.user.id) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { list } = reorderSchema.parse(body);

    // Update chapter orders in a transaction
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

    return NextResponse.json(
      { message: "Chapters reordered successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid request data" },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
} 