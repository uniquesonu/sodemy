import React from 'react'
import Filters from './filters'
import CoursesList from './coursesList'

const AllCourses = () => {
  return (
    <div className='flex flex-col gap-16'>
    <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>All Business Courses</h2>
        <div className='flex gap-2 p-8 border items-center'><span className='border h-8 w-8 flex items-center justify-center text-lg bg-foreground text-background font-extrabold rounded-full'>i</span>Not sure? All courses have a 30 day money-back guarantee</div>
    </div>
    <div className='flex gap-16'>
        <div className='w-1/4'>
            <Filters />
        </div>
        <div className='w-3/4'>
            <CoursesList />
        </div>
    </div>
    </div>
    
  )
}

export default AllCourses