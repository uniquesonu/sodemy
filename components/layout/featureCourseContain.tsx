"use client";
import React, { useState } from "react";
import { StarComponent } from "./star";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const courseData = [
  {
    title: "Amazon (KDP): Self Publishing Master Course",
    description:
      "Amazon BestSeller Book Marketing & Amazon KDP (Kindle Self Publishing): Amazon KDP for create a passive income",
    author: "Sonu Kumar",
    updatedDate: "July 2023",
    lengthOfLec: "4.5",
    numberOfLec: "55",
    price: "449",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/5436556_c8d1.jpg",
    rating: 4.5,
    ratingCnt: 51,
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Learn web development from scratch with HTML, CSS, JavaScript, and more",
    author: "Jane Smith",
    updatedDate: "June 2023",
    lengthOfLec: "8.0",
    numberOfLec: "80",
    price: "599",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/5436556_c8d1.jpg",
    rating: 4.8,
    ratingCnt: 120,
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Introduction to machine learning algorithms and concepts",
    author: "John Doe",
    updatedDate: "August 2023",
    lengthOfLec: "6.5",
    numberOfLec: "45",
    price: "699",
    imageUrl: "https://img-c.udemycdn.com/course/480x270/5436556_c8d1.jpg",
    rating: 4.7,
    ratingCnt: 75,
  },
  // Add more course objects here...
];

const FeatureCourseContain = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handleNext = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courseData.length);
  };

  const handlePrev = () => {
    setCurrentCourseIndex(
      (prevIndex) => (prevIndex - 1 + courseData.length) % courseData.length
    );
  };

  const currentCourse = courseData[currentCourseIndex];

  return (
    <div className="border relative w-full p-4 flex gap-8">
      <img src={currentCourse.imageUrl} alt="instructor" />
      <div className="flex flex-col">
        <div className="flex flex-col mb-auto gap-1">
          <h4 className="text-2xl font-semibold">{currentCourse.title}</h4>
          <h2 className="text-xl font-normal">{currentCourse.description}</h2>
          <p className="text-sm">By {currentCourse.author}</p>
          <div className="flex gap-8 text-sm">
            <p>
              Updated{" "}
              <span className="font-bold">{currentCourse.updatedDate}</span>
            </p>
            <p>{currentCourse.lengthOfLec} total hours</p>
            <p>{currentCourse.numberOfLec} lectures</p>
            <p>All Levels</p>
          </div>
          <StarComponent
            rating={currentCourse.rating}
            ratingCnt={currentCourse.ratingCnt}
          />
        </div>
        <span>
          ₹{currentCourse.price} <span className="line-through">779</span>
        </span>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 -mt-4 -ml-4 top-1/2 bottom-1/2"
      >
        <ArrowLeftCircle size={32} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 -mt-4 -mr-4 top-1/2 bottom-1/2"
      >
        <ArrowRightCircle size={32} />
      </button>
    </div>
  );
};

export default FeatureCourseContain;
