import React, { Fragment } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CourseCard from "./courseCard";
import data from "./data.json";

const TabContentComponent = ({
  title,
  description,
  buttonName,
}: {
  title: string;
  description: string;
  buttonName: string;
}) => {
  return (
    <>
      <TabsContent value="python">
        <Card className="p-4 pl-4">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <Button variant={"outline"} className="w-fit">
              {buttonName}
            </Button>
          </CardHeader>
          <CardContent className="p-4 w-full overflow-x-auto flex gap-4">
            {data.map((course, index) => (
              <Fragment key={index}>
                <CourseCard
                  thumbnail={course.thumbnail}
                  courseName={course.courseName}
                  teacherName={course.teacherName}
                  rating={course.rating}
                  no_of_rating={course.no_of_rating}
                  price={course.price}
                />
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default TabContentComponent;
