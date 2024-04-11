import { StarComponent } from "@/components/layout/star";
import { Button } from "@/components/ui/button";

import React from "react";
import CourseDescription from "./CourseDescription";
import CourseFeatues from "./CourseFeatues";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="bg-gray-800 text-white flex px-48 gap-24 py-12">
        <div className="w-3/4 space-y-4">
          <h2 className="text-3xl font-bold ">
            The Web development Bootcamp 2023
          </h2>
          <p className="text-xl font-normal">
            10 Hours of React just added. Become a Developer With ONE course -
            HTML, CSS, JavaScript, React, Node, MongoDB and More!
          </p>
          <div className="flex gap-8">
            <StarComponent rating={4} ratingCnt="410,512" />
            <span>824,856 students</span>
          </div>
          <div>
            Created by{" "}
            <span className="underline text-blue-400">
              <a href="#">Colt Stlee</a>
            </span>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-4">
          <div className="h-52 bg-red-600">saf</div>
          <span className="flex gap-4 items-center">
            <h2 className="text-xl font-bold">₹ 599</h2>
            <p className="line-through">₹ 1,999</p>
          </span>
          <Button>Add to cart</Button>
        </div>
      </div>
      <CourseDescription />
      <CourseFeatues />
      

    </div>
  );
};

export default Page;
