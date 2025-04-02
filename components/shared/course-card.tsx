import Link from "next/link";
import Image from "next/image";
import { Course, Chapter, Lesson, User, Review } from "@prisma/client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";

interface CourseCardProps {
  course: Course & {
    instructor: User;
    chapters: (Chapter & {
      lessons: Lesson[];
    })[];
    reviews: Review[];
  };
}

export function CourseCard({ course }: CourseCardProps) {
  const totalLessons = course.chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length,
    0
  );

  const averageRating =
    course.reviews.reduce((acc, review) => acc + review.rating, 0) /
    course.reviews.length;

  return (
    <Card className="overflow-hidden">
      <Link href={`/dashboard/courses/${course.id}`}>
        <div className="aspect-video relative">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge
              variant={
                course.status === "PUBLISHED"
                  ? "default"
                  : course.status === "DRAFT"
                  ? "secondary"
                  : "destructive"
              }
            >
              {course.status.toLowerCase()}
            </Badge>
            {course.reviews.length > 0 && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span>{averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">
                  ({course.reviews.length})
                </span>
              </div>
            )}
          </div>
          <h3 className="font-semibold">{course.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{course.chapters.length} chapters</span>
            <span>•</span>
            <span>{totalLessons} lessons</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-lg font-bold">{formatPrice(course.price)}</div>
          <div className="text-sm text-muted-foreground">
            {course.enrolledStudents} enrolled
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
} 