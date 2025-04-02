"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Chapter, Lesson } from "@prisma/client";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Pencil, Trash, GripVertical, Plus } from "lucide-react";
import { toast } from "sonner";

interface ChapterListProps {
  courseId: string;
  chapters: (Chapter & {
    lessons: Lesson[];
  })[];
}

export function ChapterList({ courseId, chapters: initialChapters }: ChapterListProps) {
  const router = useRouter();
  const [chapters, setChapters] = useState(initialChapters);
  const [isReordering, setIsReordering] = useState(false);

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(chapters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChapters(items);

    try {
      await fetch(`/api/courses/${courseId}/chapters/reorder`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list: items.map((item, index) => ({
            id: item.id,
            order: index,
          })),
        }),
      });

      toast.success("Chapters reordered successfully");
      router.refresh();
    } catch {
      toast.error("Failed to reorder chapters");
    }
  };

  const onAddChapter = () => {
    router.push(`/dashboard/courses/${courseId}/chapters/new`);
  };

  const onEditChapter = (chapterId: string) => {
    router.push(`/dashboard/courses/${courseId}/chapters/${chapterId}`);
  };

  const onDeleteChapter = async (chapterId: string) => {
    try {
      const response = await fetch(
        `/api/courses/${courseId}/chapters/${chapterId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      toast.success("Chapter deleted successfully");
      router.refresh();
    } catch {
      toast.error("Failed to delete chapter");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Course Structure</h3>
        <Button onClick={onAddChapter}>
          <Plus className="mr-2 h-4 w-4" />
          Add Chapter
        </Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chapters">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Accordion type="single" collapsible className="space-y-2">
                {chapters.map((chapter, index) => (
                  <Draggable
                    key={chapter.id}
                    draggableId={chapter.id}
                    index={index}
                  >
                    {(provided) => (
                      <AccordionItem
                        value={chapter.id}
                        className="border rounded-md"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <div className="flex items-center">
                          <div
                            className={cn(
                              "flex items-center gap-x-2 p-4 w-full",
                              isReordering && "cursor-grab"
                            )}
                            {...provided.dragHandleProps}
                          >
                            <GripVertical className="h-5 w-5 text-muted-foreground" />
                            <AccordionTrigger className="hover:no-underline flex-1">
                              <div className="flex items-center gap-x-2">
                                <div className="font-medium">
                                  Chapter {index + 1}: {chapter.title}
                                </div>
                              </div>
                            </AccordionTrigger>
                          </div>
                          <div className="flex items-center gap-x-2 p-4">
                            <Button
                              onClick={() => onEditChapter(chapter.id)}
                              size="sm"
                              variant="ghost"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => onDeleteChapter(chapter.id)}
                              size="sm"
                              variant="ghost"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <AccordionContent className="p-4 pt-0">
                          {chapter.lessons.length === 0 && (
                            <p className="text-sm text-muted-foreground">
                              No lessons yet
                            </p>
                          )}
                          {chapter.lessons.length > 0 && (
                            <div className="space-y-2">
                              {chapter.lessons.map((lesson) => (
                                <div
                                  key={lesson.id}
                                  className="flex items-center gap-x-2 text-sm"
                                >
                                  <div className="flex-1">{lesson.title}</div>
                                  <Button
                                    onClick={() =>
                                      router.push(
                                        `/dashboard/courses/${courseId}/chapters/${chapter.id}/lessons/${lesson.id}`
                                      )
                                    }
                                    size="sm"
                                    variant="ghost"
                                  >
                                    <Pencil className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                          <Button
                            onClick={() =>
                              router.push(
                                `/dashboard/courses/${courseId}/chapters/${chapter.id}/lessons/new`
                              )
                            }
                            className="mt-4"
                            variant="outline"
                            size="sm"
                          >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Lesson
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Accordion>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
} 