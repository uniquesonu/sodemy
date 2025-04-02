import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { CourseForm } from "@/components/forms/course-form";
import { ChapterList } from "@/components/shared/chapter-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const prisma = new PrismaClient();

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return null;
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        include: {
          lessons: true,
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!course) {
    notFound();
  }

  // Verify ownership
  if (course.instructorId !== user.id) {
    notFound();
  }

  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{course.title}</h2>
        <p className="text-muted-foreground">
          Manage your course content and structure.
        </p>
      </div>
      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Chapters and Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <ChapterList courseId={course.id} chapters={course.chapters} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <CourseForm
                userId={user.id}
                initialData={{
                  title: course.title,
                  description: course.description,
                  price: course.price.toString(),
                  thumbnail: course.thumbnail,
                  category: course.category,
                }}
                courseId={course.id}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 