import Image from "next/image";
import React from "react";

function CourseCard({ title, author, progress, imgURL }: { title: string; author: string; progress: string; imgURL: string}) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-background text-white m-4 hover:scale-105 cursor-pointer">
      <Image
        className="w-full"
        src={imgURL}
        alt={title}
        width={500}
        height={300}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-foreground text-base">Author: {author}</p>
        <p className="text-foreground text-base">Progress: {progress}</p>
      </div>
    </div>
  );
}

export default CourseCard;
