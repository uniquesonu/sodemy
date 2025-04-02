import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { CourseCard } from "@/components/shared/course-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function CoursesPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const courses = await prisma.course.findMany({
    where: {
      instructorId: user?.id,
    },
    include: {
      instructor: true,
      chapters: {
        include: {
          lessons: true,
        },
      },
      reviews: true,
    },
  });

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Courses</h2>
          <p className="text-muted-foreground">
            Create and manage your courses here.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/courses/create">Create Course</Link>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        {courses.length === 0 && (
          <div className="col-span-full text-center">
            <p className="text-muted-foreground">
              You haven&apos;t created any courses yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 