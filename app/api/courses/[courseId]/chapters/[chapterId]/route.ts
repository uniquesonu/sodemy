import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import * as z from "zod";

const prisma = new PrismaClient();

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

    // Delete chapter and its lessons
    await prisma.$transaction([
      prisma.lesson.deleteMany({
        where: {
          chapterId: params.chapterId,
        },
      }),
      prisma.chapter.delete({
        where: {
          id: params.chapterId,
        },
      }),
    ]);

    // Reorder remaining chapters
    const remainingChapters = course.chapters
      .filter((chapter) => chapter.id !== params.chapterId)
      .sort((a, b) => a.order - b.order);

    await prisma.$transaction(
      remainingChapters.map((chapter, index) =>
        prisma.chapter.update({
          where: {
            id: chapter.id,
          },
          data: {
            order: index,
          },
        })
      )
    );

    return NextResponse.json(
      { message: "Chapter deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
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