"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseCard } from "@/components/shared/course-card";
import { FilterAccordian } from "@/components/layout/filterAccordian";
import { TabsCourse } from "@/components/layout/tabscourse";

// Mock data for courses
const courses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 49.99,
    rating: 4.5,
    enrolledStudents: 1200,
    category: "Web Development",
    level: "Beginner",
  },
  {
    id: "2",
    title: "Advanced JavaScript Concepts",
    description: "Master advanced JavaScript concepts like closures, promises, and async/await.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 59.99,
    rating: 4.8,
    enrolledStudents: 850,
    category: "Web Development",
    level: "Advanced",
  },
  {
    id: "3",
    title: "React.js Fundamentals",
    description: "Learn how to build modern web applications with React.js.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 69.99,
    rating: 4.7,
    enrolledStudents: 1100,
    category: "Web Development",
    level: "Intermediate",
  },
  {
    id: "4",
    title: "Python for Data Science",
    description: "Learn Python programming for data analysis and visualization.",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "Sarah Williams",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 79.99,
    rating: 4.9,
    enrolledStudents: 950,
    category: "Data Science",
    level: "Intermediate",
  },
  {
    id: "5",
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning algorithms and applications.",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "David Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 89.99,
    rating: 4.6,
    enrolledStudents: 750,
    category: "Data Science",
    level: "Advanced",
  },
  {
    id: "6",
    title: "Digital Marketing Essentials",
    description: "Learn the fundamentals of digital marketing and SEO.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    price: 59.99,
    rating: 4.4,
    enrolledStudents: 1300,
    category: "Marketing",
    level: "Beginner",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Data Science",
  "Marketing",
  "Design",
  "Business",
];

// Levels for filtering
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  // Filter courses based on search query, category, and level
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">
            Browse our collection of courses and start learning today.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Input
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <TabsCourse viewMode={viewMode} setViewMode={setViewMode} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[250px_1fr]">
          <div className="space-y-4">
            <FilterAccordian
              title="Category"
              items={categories}
              selectedItem={selectedCategory}
              setSelectedItem={setSelectedCategory}
            />
            <FilterAccordian
              title="Level"
              items={levels}
              selectedItem={selectedLevel}
              setSelectedItem={setSelectedLevel}
            />
          </div>

          <div>
            {filteredCourses.length === 0 ? (
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <p className="text-muted-foreground">No courses found.</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row"
                  >
                    <div className="h-40 w-full overflow-hidden rounded-md sm:h-32 sm:w-48">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{course.title}</h3>
                        <p className="mt-1 text-muted-foreground">
                          {course.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <img
                            src={course.instructor.image}
                            alt={course.instructor.name}
                            className="h-6 w-6 rounded-full"
                          />
                          <span className="text-sm text-muted-foreground">
                            {course.instructor.name}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {course.rating} ★
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({course.enrolledStudents} students)
                          </span>
                        </div>
                        <div className="text-lg font-bold">
                          ${course.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 