import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import * as z from "zod";
import { prisma } from "@/lib/prisma";

const courseSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be a positive number"),
  thumbnail: z.string().url("Thumbnail must be a valid URL").optional(),
  category: z.string().min(1, "Category is required"),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, description, price, thumbnail, category } = courseSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (user.role !== "instructor") {
      return new NextResponse("Only instructors can create courses", { status: 403 });
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price,
        thumbnail,
        category,
        instructorId: user.id,
        status: "draft",
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const role = searchParams.get("role");

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    let courses;

    if (role === "instructor") {
      if (user.role !== "instructor") {
        return new NextResponse("Only instructors can view instructor courses", { status: 403 });
      }

      courses = await prisma.course.findMany({
        where: {
          instructorId: user.id,
        },
        include: {
          instructor: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      courses = await prisma.course.findMany({
        where: {
          status: "published",
        },
        include: {
          instructor: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    return NextResponse.json(courses);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
} 