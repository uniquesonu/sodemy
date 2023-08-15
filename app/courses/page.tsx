"use client";
import TabComponent from "@/components/layout/tabscourse";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const videos = [
  {
    id: 1,
    title: "Video 1",
    url: "https://www.example.com/video1.mp4",
  },
  {
    id: 2,
    title: "Video 2",
    url: "https://www.example.com/video2.mp4",
  },
  {
    id: 3,
    title: "Video 3",
    url: "https://www.example.com/video3.mp4",
  },
  {
    id: 4,
    title: "Video 4",
    url: "https://www.example.com/video4.mp4",
  },
  {
    id: 5,
    title: "Video 5",
    url: "https://www.example.com/video5.mp4",
  },
  {
    id: 6,
    title: "Video 6",
    url: "https://www.example.com/video6.mp4",
  },
  {
    id: 7,
    title: "Video 7",
    url: "https://www.example.com/video7.mp4",
  },
  {
    id: 8,
    title: "Video 8",
    url: "https://www.example.com/video8.mp4",
  },
  {
    id: 9,
    title: "Video 9",
    url: "https://www.example.com/video9.mp4",
  },
  {
    id: 10,
    title: "Video 10",
    url: "https://www.example.com/video10.mp4",
  },
 
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleTitleClick = (video: any) => {
    setSelectedVideo(video);
  };

  return (
    <div className="flex">
      <div className="w-3/4">
        <video controls className="w-full">
          <source src={selectedVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <TabComponent />
      </div>
      <div className="w-1/4 p-4 flex flex-col gap-4 bg-background h-screen overflow-auto">
        <h2 className="text-xl font-bold text-foreground border-b-4 border-foreground">
          Course Content
        </h2>

        {/* Accordian */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              {videos.map((video) => (
                <h2
                  key={video.id}
                  className="cursor-pointer space-x-2 flex items-center bg-foreground mb-2 text-background p-2 rounded-md"
                  onClick={() => handleTitleClick(video)}
                >
                  <Checkbox id="terms" className="bg-background border-background border outline-foreground"/>
        <Label htmlFor="terms">{video.title}</Label>
                </h2>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              {videos.map((video) => (
                <h2
                  key={video.id}
                  className="cursor-pointer space-x-2 flex items-center bg-foreground mb-2 text-background p-2 rounded-md"
                  onClick={() => handleTitleClick(video)}
                >
                  <Checkbox id="terms" className="bg-background border-background border outline-foreground"/>
        <Label htmlFor="terms">{video.title}</Label>
                </h2>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              {videos.map((video) => (
                <h2
                  key={video.id}
                  className="cursor-pointer space-x-2 flex items-center bg-foreground mb-2 text-background p-2 rounded-md"
                  onClick={() => handleTitleClick(video)}
                >
                  <Checkbox id="terms" className="bg-background border-background border outline-foreground"/>
        <Label htmlFor="terms">{video.title}</Label>
                </h2>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default VideoPage;
