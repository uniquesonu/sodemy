import React from 'react'
import { Video, Code, FileText, Smartphone, Tv, Award } from "lucide-react";

const CourseFeatues = () => {
  return (
    <div className=" py-12 rounded shadow-lg bg-background/60 text-foreground px-72">
  <h2 className="text-2xl font-extrabold underline mb-4">This course includes:</h2>
  <div className="grid grid-cols-2 gap-6">
    <div className="flex items-center">
      <Video className="w-6 h-6 mr-2" />
      <span className="font-bold">73.5 hours on-demand video</span>
    </div>
    <div className="flex items-center">
      <Code className="w-6 h-6 mr-2" />
      <span className="font-bold">62 coding exercises</span>
    </div>
    <div className="flex items-center">
      <FileText className="w-6 h-6 mr-2" />
      <span className="font-bold">60 articles</span>
    </div>
    <div className="flex items-center">
      <span className="flex-shrink-0 w-6 h-6 mr-2">
        <Smartphone />
      </span>
      <span className="font-bold">Access on mobile and TV</span>
    </div>
    <div className="flex items-center">
      <Award className="w-6 h-6 mr-2" />
      <span className="font-bold">Certificate of completion</span>
    </div>
    <div className="flex items-center">
      <Tv className="w-6 h-6 mr-2" />
      <span className="font-bold">Access on mobile and TV</span>
    </div>
  </div>
</div>
  )
}

export default CourseFeatues