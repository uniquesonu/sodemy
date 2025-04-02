import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { ChapterForm } from "@/components/forms/chapter-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

interface EditChapterPageProps {
  params: {
    courseId: string;
    chapterId: string;
  };
}

export default async function EditChapterPage({ params }: EditChapterPageProps) {
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

  const chapter = await prisma.chapter.findUnique({
    where: {
      id: params.chapterId,
    },
  });

  if (!chapter) {
    notFound();
  }

  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Edit Chapter</h2>
        <p className="text-muted-foreground">
          Update your chapter information.
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
              order={chapter.order}
              initialData={chapter}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 