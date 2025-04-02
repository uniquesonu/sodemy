"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
}

interface Chapter {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

interface CourseChapterListProps {
  chapters: Chapter[];
}

export function CourseChapterList({ chapters }: CourseChapterListProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  return (
    <div className="space-y-4">
      {chapters.map((chapter) => (
        <div key={chapter.id} className="rounded-lg border">
          <button
            onClick={() => toggleChapter(chapter.id)}
            className="flex w-full items-center justify-between p-4 hover:bg-muted/50"
          >
            <div className="flex items-center gap-2">
              {expandedChapters.includes(chapter.id) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
              <div>
                <h3 className="font-semibold">{chapter.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {chapter.lessons.length} lessons
                </p>
              </div>
            </div>
          </button>
          <div
            className={cn(
              "grid gap-2 overflow-hidden transition-all",
              expandedChapters.includes(chapter.id)
                ? "grid-rows-[1fr] p-4"
                : "grid-rows-[0fr]"
            )}
          >
            <div className="space-y-2">
              {chapter.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between rounded-md border p-3"
                >
                  <div>
                    <h4 className="font-medium">{lesson.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 