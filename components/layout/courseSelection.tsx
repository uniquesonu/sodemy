import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabContentComponent from "./tabContent";
import data from "./data.json"

const CourseSelection = () => {
  return (
    <div className="flex flex-col gap-4 ml-4 mr-4 p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl mt-6 font-bold">
          A broad selection of courses
        </h2>
        <p className="text-xl font-normal">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
      </div>
      <Tabs defaultValue="python" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="excel">Excel</TabsTrigger>
          <TabsTrigger value="web-development">Web Development</TabsTrigger>
          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
          <TabsTrigger value="data-science">Web Development</TabsTrigger>
          <TabsTrigger value="amazon-aws">Amazon AWS</TabsTrigger>
          <TabsTrigger value="drawing">Drawing</TabsTrigger>
        </TabsList>
        
        <TabContentComponent 
        title="Build websites and applications with Web Development" 
        description="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on." 
        buttonName="Explore Web Development"
        />
      </Tabs>
    </div>
  );
};

export default CourseSelection;
