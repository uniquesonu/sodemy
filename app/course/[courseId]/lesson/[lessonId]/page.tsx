"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Clock, Download, FileText, Play } from "lucide-react";

// Mock data for a lesson
const lesson = {
  id: "1",
  title: "What is HTML?",
  description: "An introduction to HTML and its purpose.",
  duration: "15 minutes",
  order: 1,
  videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
  content: `
    <h2>Introduction to HTML</h2>
    <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell browsers how to display the content.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li><strong>Elements:</strong> The building blocks of HTML pages</li>
      <li><strong>Tags:</strong> Keywords that define how content should be formatted</li>
      <li><strong>Attributes:</strong> Additional information about elements</li>
    </ul>
    
    <h3>Basic HTML Document Structure</h3>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;This is a Heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    
    <h3>Common HTML Elements</h3>
    <ul>
      <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings</li>
      <li><code>&lt;p&gt;</code>: Paragraphs</li>
      <li><code>&lt;a&gt;</code>: Links</li>
      <li><code>&lt;img&gt;</code>: Images</li>
      <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Lists</li>
      <li><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>: Containers</li>
    </ul>
  `,
  resources: [
    {
      id: "1",
      title: "HTML Cheat Sheet",
      type: "pdf",
      url: "#",
    },
    {
      id: "2",
      title: "HTML Reference",
      type: "link",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  ],
};

// Mock data for course chapters
const chapters = [
  {
    id: "1",
    title: "Introduction to HTML",
    description: "Learn the basics of HTML and how to structure a web page.",
    order: 1,
    lessons: [
      {
        id: "1",
        title: "What is HTML?",
        duration: "15 minutes",
        order: 1,
      },
      {
        id: "2",
        title: "HTML Document Structure",
        duration: "20 minutes",
        order: 2,
      },
      {
        id: "3",
        title: "HTML Elements and Tags",
        duration: "25 minutes",
        order: 3,
      },
    ],
  },
  {
    id: "2",
    title: "Introduction to CSS",
    description: "Learn how to style your web pages with CSS.",
    order: 2,
    lessons: [
      {
        id: "4",
        title: "What is CSS?",
        duration: "15 minutes",
        order: 1,
      },
      {
        id: "5",
        title: "CSS Selectors",
        duration: "20 minutes",
        order: 2,
      },
      {
        id: "6",
        title: "CSS Properties",
        duration: "25 minutes",
        order: 3,
      },
    ],
  },
  {
    id: "3",
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript programming.",
    order: 3,
    lessons: [
      {
        id: "7",
        title: "What is JavaScript?",
        duration: "15 minutes",
        order: 1,
      },
      {
        id: "8",
        title: "Variables and Data Types",
        duration: "20 minutes",
        order: 2,
      },
      {
        id: "9",
        title: "Functions and Control Flow",
        duration: "25 minutes",
        order: 3,
      },
    ],
  },
];

export default function LessonPage({
  params,
}: {
  params: { courseId: string; lessonId: string };
}) {
  const [activeTab, setActiveTab] = useState("content");

  // Find the current lesson and its position in the course
  let currentLessonIndex = -1;
  let currentChapterIndex = -1;
  let prevLesson = null;
  let nextLesson = null;

  chapters.forEach((chapter, chapterIndex) => {
    chapter.lessons.forEach((lesson, lessonIndex) => {
      if (lesson.id === params.lessonId) {
        currentChapterIndex = chapterIndex;
        currentLessonIndex = lessonIndex;
      }
    });
  });

  // Find previous and next lessons
  if (currentChapterIndex !== -1 && currentLessonIndex !== -1) {
    const currentChapter = chapters[currentChapterIndex];
    
    // Previous lesson
    if (currentLessonIndex > 0) {
      prevLesson = {
        id: currentChapter.lessons[currentLessonIndex - 1].id,
        title: currentChapter.lessons[currentLessonIndex - 1].title,
      };
    } else if (currentChapterIndex > 0) {
      // Previous chapter's last lesson
      const prevChapter = chapters[currentChapterIndex - 1];
      prevLesson = {
        id: prevChapter.lessons[prevChapter.lessons.length - 1].id,
        title: prevChapter.lessons[prevChapter.lessons.length - 1].title,
      };
    }
    
    // Next lesson
    if (currentLessonIndex < currentChapter.lessons.length - 1) {
      nextLesson = {
        id: currentChapter.lessons[currentLessonIndex + 1].id,
        title: currentChapter.lessons[currentLessonIndex + 1].title,
      };
    } else if (currentChapterIndex < chapters.length - 1) {
      // Next chapter's first lesson
      const nextChapter = chapters[currentChapterIndex + 1];
      nextLesson = {
        id: nextChapter.lessons[0].id,
        title: nextChapter.lessons[0].title,
      };
    }
  }

  return (
    <div className="container py-6">
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
            <p className="mt-2 text-muted-foreground">{lesson.description}</p>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border bg-black">
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <h3 className="text-lg font-semibold">Lesson Resources</h3>
              <div className="space-y-2">
                {lesson.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between rounded-md border p-3"
                  >
                    <div className="flex items-center gap-2">
                      {resource.type === "pdf" ? (
                        <FileText className="h-5 w-5 text-red-500" />
                      ) : (
                        <Play className="h-5 w-5 text-blue-500" />
                      )}
                      <span>{resource.title}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={resource.url} target="_blank">
                        <Download className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center justify-between border-t pt-6">
            {prevLesson ? (
              <Button variant="outline" asChild>
                <Link
                  href={`/course/${params.courseId}/lesson/${prevLesson.id}`}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevLesson.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
            {nextLesson ? (
              <Button variant="outline" asChild>
                <Link
                  href={`/course/${params.courseId}/lesson/${nextLesson.id}`}
                  className="flex items-center gap-2"
                >
                  <span className="hidden sm:inline">{nextLesson.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Course Content</h3>
            <div className="mt-4 space-y-2">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="space-y-1">
                  <h4 className="font-medium">{chapter.title}</h4>
                  <ul className="space-y-1 pl-4">
                    {chapter.lessons.map((lessonItem) => (
                      <li key={lessonItem.id}>
                        <Link
                          href={`/course/${params.courseId}/lesson/${lessonItem.id}`}
                          className={`flex items-center gap-2 text-sm ${
                            lessonItem.id === params.lessonId
                              ? "font-medium text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Play className="h-3 w-3" />
                          <span>{lessonItem.title}</span>
                          <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {lessonItem.duration}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 