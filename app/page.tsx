import Carousel from "@/components/layout/carousel";
import Categories from "@/components/layout/categories";
import CourseSelection from "@/components/layout/courseSelection";
import Instructor from "@/components/layout/instructor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <Carousel />
      <CourseSelection />
      <Categories />
      {/* TODO: CTA BECOME AN INSTRUCTOR => // change the background color according to theme */}
      <Instructor /> 
    </main>
  )
}
