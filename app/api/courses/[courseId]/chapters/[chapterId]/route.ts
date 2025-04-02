import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const chapterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  order: z.number(),
});

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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

    // Delete the chapter and its lessons in a transaction
    await prisma.$transaction(async (tx) => {
      // Delete all lessons in the chapter
      await tx.lesson.deleteMany({
        where: {
          chapterId: params.chapterId,
        },
      });

      // Delete the chapter
      await tx.chapter.delete({
        where: {
          id: params.chapterId,
        },
      });

      // Reorder the remaining chapters
      const remainingChapters = await tx.chapter.findMany({
        where: {
          courseId: params.courseId,
        },
        orderBy: {
          order: "asc",
        },
      });

      // Update the order of each chapter
      for (let i = 0; i < remainingChapters.length; i++) {
        await tx.chapter.update({
          where: {
            id: remainingChapters[i].id,
          },
          data: {
            order: i,
          },
        });
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, description, order } = chapterSchema.parse(body);

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

    const chapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
      },
      data: {
        title,
        description,
        order,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
} 