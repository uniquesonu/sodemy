import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image';

const CourseCard = (
    {
        thumbnail,
        courseName,
        teacherName,
        rating,
        no_of_rating,
        price,
    }:{
        thumbnail: string;
        courseName: string;
        teacherName: string;
        rating: string;
        no_of_rating: string;
        price: string;
    }) => {
  return (
    <Card className='py-2 border-none shadow shadow-card-foreground'>
        <CardContent className="w-72 flex flex-col justify-center items-start gap-2 ">
              <Image
                src={thumbnail}
                alt=""
                className="mx-auto my-2 rounded w-full"
                width={600}
                height={600}
                loading='lazy'
              />
              <CardTitle>
                {courseName}
              </CardTitle>
              <CardDescription className="flex items-start ">
                {teacherName}
              </CardDescription>
              <CardDescription className="flex gap-4 items-start ">
                {rating} ⭐⭐⭐⭐ <span className="text-slate-500">({no_of_rating})</span>
              </CardDescription>
              <CardDescription className="">₹{price}</CardDescription>
            </CardContent>
    </Card>
  )
}

export default CourseCard