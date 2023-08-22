import AllCourses from "@/components/layout/allCourses";
import CourseCard from "@/components/layout/courseCard";
import data from "@/components/layout/data.json";
import FeatureCourse from "@/components/layout/featureCourse";
import {
  CardContent
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fragment } from "react";
const Page = () => {
  return (
    <div className="flex flex-col gap-8 ml-4 mr-4 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl mt-6 font-bold">
        Business Courses
        </h2>
        <p className="text-xl font-normal">
        Courses to get you started
        </p>
      </div>
      <Tabs defaultValue="most-popular" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="most-popular">Most popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="most-popular">
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
            </TabsContent>
      </Tabs>
      <FeatureCourse />
      <AllCourses />
      </div>
  )
}

export default Page