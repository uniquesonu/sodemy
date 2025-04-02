import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ChapterForm } from "@/components/forms/chapter-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

interface NewChapterPageProps {
  params: {
    courseId: string;
  };
}

export default async function NewChapterPage({ params }: NewChapterPageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return null;
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  if (!course) {
    notFound();
  }

  // Verify ownership
  if (course.instructorId !== session.user.id) {
    notFound();
  }

  // Get the order for the new chapter
  const lastChapter = await prisma.chapter.findFirst({
    where: {
      courseId: params.courseId,
    },
    orderBy: {
      order: "desc",
    },
  });

  const newOrder = lastChapter ? lastChapter.order + 1 : 0;

  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">New Chapter</h2>
        <p className="text-muted-foreground">
          Add a new chapter to your course.
        </p>
      </div>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Chapter Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ChapterForm
              courseId={params.courseId}
              order={newOrder}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 