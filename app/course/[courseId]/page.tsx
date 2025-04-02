"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Users, Clock, BookOpen, CheckCircle } from "lucide-react";
import { CourseChapterList } from "@/components/shared/course-chapter-list";

// Mock data for a course
const course = {
  id: "1",
  title: "Introduction to Web Development",
  description:
    "Learn the basics of HTML, CSS, and JavaScript to build your first website. This course is designed for beginners who want to start their journey in web development.",
  thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  instructor: {
    id: "1",
    name: "John Doe",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "John is a senior web developer with over 10 years of experience. He has worked with companies like Google and Microsoft.",
  },
  price: 49.99,
  rating: 4.5,
  enrolledStudents: 1200,
  totalLessons: 24,
  totalDuration: "12 hours",
  level: "Beginner",
  category: "Web Development",
  chapters: [
    {
      id: "1",
      title: "Introduction to HTML",
      description: "Learn the basics of HTML and how to structure a web page.",
      order: 1,
      lessons: [
        {
          id: "1",
          title: "What is HTML?",
          description: "An introduction to HTML and its purpose.",
          duration: "15 minutes",
          order: 1,
        },
        {
          id: "2",
          title: "HTML Document Structure",
          description: "Learn about the basic structure of an HTML document.",
          duration: "20 minutes",
          order: 2,
        },
        {
          id: "3",
          title: "HTML Elements and Tags",
          description: "Explore common HTML elements and tags.",
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
          description: "An introduction to CSS and its purpose.",
          duration: "15 minutes",
          order: 1,
        },
        {
          id: "5",
          title: "CSS Selectors",
          description: "Learn about different types of CSS selectors.",
          duration: "20 minutes",
          order: 2,
        },
        {
          id: "6",
          title: "CSS Properties",
          description: "Explore common CSS properties.",
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
          description: "An introduction to JavaScript and its purpose.",
          duration: "15 minutes",
          order: 1,
        },
        {
          id: "8",
          title: "Variables and Data Types",
          description: "Learn about variables and data types in JavaScript.",
          duration: "20 minutes",
          order: 2,
        },
        {
          id: "9",
          title: "Functions and Control Flow",
          description: "Explore functions and control flow in JavaScript.",
          duration: "25 minutes",
          order: 3,
        },
      ],
    },
  ],
};

// Mock data for reviews
const reviews = [
  {
    id: "1",
    user: {
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
    comment:
      "This course was exactly what I needed to get started with web development. The instructor explains concepts clearly and provides plenty of examples.",
    date: "2023-05-15",
  },
  {
    id: "2",
    user: {
      name: "Bob Smith",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 4,
    comment:
      "Great course for beginners. I learned a lot about HTML, CSS, and JavaScript. The only downside is that some of the advanced topics could be explained in more detail.",
    date: "2023-06-20",
  },
  {
    id: "3",
    user: {
      name: "Carol Williams",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
    comment:
      "I've taken several web development courses, and this is by far the best one. The instructor is knowledgeable and engaging, and the course material is well-structured.",
    date: "2023-07-10",
  },
];

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{course.rating} ({course.enrolledStudents} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.enrolledStudents} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.totalDuration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{course.totalLessons} lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              <span>{course.level}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={course.instructor.image}
              alt={course.instructor.name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{course.instructor.name}</h3>
              <p className="text-sm text-muted-foreground">Course Instructor</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">About This Course</h3>
                <p className="mt-2 text-muted-foreground">
                  {course.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">What You'll Learn</h3>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Understand the basics of HTML, CSS, and JavaScript</li>
                  <li>Create responsive and interactive web pages</li>
                  <li>Build a complete website from scratch</li>
                  <li>Deploy your website to the internet</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Requirements</h3>
                <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
                  <li>No prior programming experience required</li>
                  <li>A computer with internet access</li>
                  <li>A text editor (we'll use Visual Studio Code)</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseChapterList chapters={course.chapters} />
            </TabsContent>
            <TabsContent value="reviews" className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.user.image}
                      alt={review.user.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{review.user.name}</h4>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl font-bold">
                  ${course.price.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  $99.99
                </span>
              </div>
              <Button className="w-full" size="lg">
                Enroll Now
              </Button>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                30-day money-back guarantee
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">This course includes:</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{course.totalDuration} of video content</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Full lifetime access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Access on mobile and desktop</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 