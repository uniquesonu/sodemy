import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

const createCourseSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  price: z.number().min(0),
  thumbnail: z.string().url(),
  category: z.string().min(2),
  instructorId: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { title, description, price, thumbnail, category, instructorId } =
      createCourseSchema.parse(body);

    // Verify that the instructor ID matches the session user
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user || user.id !== instructorId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price,
        thumbnail,
        category,
        instructorId,
        status: "DRAFT",
        enrolledStudents: 0,
        rating: 0,
      },
    });

    return NextResponse.json(
      {
        course: {
          id: course.id,
          title: course.title,
          description: course.description,
          price: course.price,
          thumbnail: course.thumbnail,
          category: course.category,
          status: course.status,
        },
      },
      { status: 201 }
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