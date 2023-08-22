import React from 'react'
import CourseListCard from './courseListCard'

const courseData = [
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "The complete SQL Bootcamp: Go from Zero to Hero",
    courseTag: "Become an expert at SQL!",
    author: "Jose Portilla",
    courseLength: "9",
    noOfLec: "83",
    level: "All",
    seller: "Best",
    price: "3,199"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Introduction to Web Development",
    courseTag: "Build your own websites!",
    author: "Emily Smith",
    courseLength: "6",
    noOfLec: "50",
    level: "Beginner",
    seller: "Top Courses",
    price: "1,499"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Data Science Foundations",
    courseTag: "Unlock the power of data",
    author: "John Williams",
    courseLength: "10",
    noOfLec: "75",
    level: "Intermediate",
    seller: "Data Insights",
    price: "2,999"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Advanced JavaScript Techniques",
    courseTag: "Master the art of modern JS",
    author: "Sarah Johnson",
    courseLength: "8",
    noOfLec: "68",
    level: "Advanced",
    seller: "Code Masters",
    price: "2,599"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Digital Marketing 101",
    courseTag: "Boost your online presence",
    author: "Alex Martin",
    courseLength: "5",
    noOfLec: "42",
    level: "Beginner",
    seller: "Digital Success",
    price: "1,199"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Machine Learning Fundamentals",
    courseTag: "Dive into AI and ML",
    author: "Amit Gupta",
    courseLength: "12",
    noOfLec: "90",
    level: "Intermediate",
    seller: "AI Academy",
    price: "3,299"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Artificial Intelligence Ethics",
    courseTag: "Navigating the moral landscape",
    author: "Sophia Lee",
    courseLength: "7",
    noOfLec: "55",
    level: "Intermediate",
    seller: "Ethics Education",
    price: "1,999"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Photography Masterclass",
    courseTag: "Capture moments like a pro",
    author: "David Clark",
    courseLength: "6",
    noOfLec: "48",
    level: "All",
    seller: "Creative Academy",
    price: "1,799"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Financial Planning Strategies",
    courseTag: "Secure your financial future",
    author: "Rachel Miller",
    courseLength: "8",
    noOfLec: "70",
    level: "Intermediate",
    seller: "Finance Experts",
    price: "2,499"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Creative Writing Workshop",
    courseTag: "Unleash your inner storyteller",
    author: "Mark Turner",
    courseLength: "4",
    noOfLec: "30",
    level: "Beginner",
    seller: "Writer's Haven",
    price: "1,099"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Mobile App Development",
    courseTag: "Build apps for the modern world",
    author: "Jessica Brown",
    courseLength: "10",
    noOfLec: "85",
    level: "Intermediate",
    seller: "App Creators",
    price: "2,799"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "The Art of Meditation",
    courseTag: "Find inner peace and tranquility",
    author: "Mira Patel",
    courseLength: "5",
    noOfLec: "40",
    level: "All",
    seller: "Mindful Living",
    price: "1,299"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Graphic Design Essentials",
    courseTag: "Create visually stunning designs",
    author: "Kevin Adams",
    courseLength: "7",
    noOfLec: "60",
    level: "Intermediate",
    seller: "Design Pros",
    price: "1,999"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Business Leadership Principles",
    courseTag: "Lead with confidence",
    author: "Andrew Carter",
    courseLength: "8",
    noOfLec: "72",
    level: "Advanced",
    seller: "Leadership Institute",
    price: "3,299"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Cooking Techniques 101",
    courseTag: "Master the art of cooking",
    author: "Maria Rodriguez",
    courseLength: "6",
    noOfLec: "55",
    level: "Beginner",
    seller: "Culinary School",
    price: "1,499"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Fitness and Nutrition Fundamentals",
    courseTag: "Achieve a healthy lifestyle",
    author: "Daniel Wilson",
    courseLength: "5",
    noOfLec: "45",
    level: "All",
    seller: "Wellness Academy",
    price: "1,299"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Spanish Language Crash Course",
    courseTag: "Learn Spanish quickly",
    author: "Elena Morales",
    courseLength: "4",
    noOfLec: "35",
    level: "Beginner",
    seller: "Language Connect",
    price: "999"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Investing in Stocks and Bonds",
    courseTag: "Grow your wealth through investing",
    author: "Jonathan Davis",
    courseLength: "7",
    noOfLec: "60",
    level: "Intermediate",
    seller: "Investor's Guide",
    price: "2,199"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Creative Music Production",
    courseTag: "Compose and produce your music",
    author: "Lisa Carter",
    courseLength: "9",
    noOfLec: "80",
    level: "Intermediate",
    seller: "Music Masters",
    price: "2,999"
  },
  {
    thumbnail: "https://img-b.udemycdn.com/course/480x270/762616_7693_3.jpg",
    courseName: "Yoga and Mindfulness",
    courseTag: "Harmonize your body and mind",
    author: "Ravi Gupta",
    courseLength: "6",
    noOfLec: "50",
    level: "All",
    seller: "Yoga Studios",
    price: "1,799"
  }
];

const CoursesList = () => {
  return (
    <div>
      <p className='flex justify-end'>{courseData.length} results</p>
      {courseData.map((course, index) => (
        <CourseListCard
          key={index}
          thumbnail={course.thumbnail}
          courseName={course.courseName}
          courseTag={course.courseTag}
          author={course.author}
          courseLength={course.courseLength}
          noOfLec={course.noOfLec}
          level={course.level}
          seller={course.seller}
          price={course.price}
        />
      ))}
    </div>
  )
}

export default CoursesList