import React from 'react'
import { StarComponent } from './star'

const CourseListCard = (
    {
        thumbnail,
        courseName,
        courseTag,
        author,
        courseLength,
        noOfLec,
        level,
        seller,
        price
    }:{
        thumbnail: string;
        courseName: string;
        courseTag: string;
        author: string;
        courseLength: string;
        noOfLec: string;
        level: string;
        seller: string;
        price: string;
    }
) => {
  return (
    <div className='flex gap-4 mt-4'>
        <img src={thumbnail} alt="course-img" className='w-80'/>
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-semibold'>{courseName}</h2>
            <p className='text-sm font-sm'>{courseTag}</p>
            <p className='text-sm opacity-70'>{author}</p>
            <StarComponent rating={4} ratingCnt="141,584"/>
            <div className='flex gap-4'>
                <p>{courseLength} total hours</p>
                <p>{noOfLec} lectures</p>
                <p>{level} Levels</p>
            </div>
            <p className='bg-[#f69c08] w-fit p-2'>{seller} Sellers</p>
        </div>
        <span className='flex-1 text-right font-bold text-2xl'>₹{price}</span>
    </div>
  )
}

export default CourseListCard