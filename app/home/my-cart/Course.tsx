import Image from "next/image";
import React from "react";

const Course = ({
  title,
  author,
  rating,
  numReviews,
  price,
  originalPrice,
}: {
  title: string;
  author: string;
  rating: number;
  numReviews: number;
  price: number;
  originalPrice: number;
}) => {
  return (
    <div className="w-full text-foreground rounded-lg shadow-md p-6">
      <div className="w-full flex items-center justify-between  gap-4">
        <Image
            src="https://th.bing.com/th/id/OIP.IzKqeXIRSjV-7Rb_bR3k6QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Course Image"
            width={300}
            height={100}
            />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-white">{author}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{rating}</span>
            <span className="ml-1">({numReviews} reviews)</span>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">${price}</p>
          <p className="text-gray-600 line-through">${originalPrice}</p>
          <div className="flex justify-end mt-4">
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
          Remove
        </button>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Course;
