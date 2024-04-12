import React from "react";
import CourseCard from "./CourseCard";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <header className="bg-gray-800 text-white px-96 py-8">
        <h1 className="text-2xl font-bold">My Learning</h1>
      </header>

      <div className="flex flex-wrap px-96 bg-foreground text-white">
        <CourseCard
          title="The Web Developer Bootcamp 2024"
          author="Colt Steele"
          progress="30% complete"
          imgURL="https://th.bing.com/th/id/OIP.IzKqeXIRSjV-7Rb_bR3k6QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
        <CourseCard
          title="The Complete Python Developer"
          author="Andrei Neagoie"
          progress="5% complete"
          imgURL="https://th.bing.com/th/id/OIP.IzKqeXIRSjV-7Rb_bR3k6QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
      </div>
    </div>
  );
};

export default page;
