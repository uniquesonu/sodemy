"use client"
import { useEffect, useState } from 'react';
import courseData from '@/components/util/courseData.json';

interface Course {
  title: string;
}

const CourseDescription = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);

  useEffect(() => {
    setCourseList(courseData);
  }, []);

  return (
    <div className="w-2/3 bg-gray-100 text-gray-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div className="p-8 flex flex-wrap">
            <h2 className="text-3xl font-bold w-full mb-8">What you&apos;ll learn</h2>
            {courseList.map((item, index) => (
              <div key={index} className="w-1/2 mb-4">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
