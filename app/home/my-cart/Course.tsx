import Image from "next/image";
import React from "react";
import { Star } from 'lucide-react';


const Course = ({
  imgURL,
  title,
  author,
  rating,
  numReviews,
  price,
  originalPrice,
}: {
  imgURL: string;
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
        <div className="flex gap-8 items-center">
        <Image
            src={imgURL}
            alt={title}
            width={300}
            height={100}
            />
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-white">{author}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 flex items-center gap-1 text-lg">
             <Star/> {rating}
            </span>
            <span className="ml-1">({numReviews} reviews)</span>
          </div>
        </div>
        </div>
        <div>
          <p className="text-lg font-semibold">₹ {price}</p>
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
