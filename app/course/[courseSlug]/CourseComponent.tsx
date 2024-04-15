import { Button } from '@/components/ui/button'
import React from 'react'

const CourseComponent = () => {
  return (
    <div className="w-1/4 flex flex-col gap-4 bg-blue-400 p-4 fixed top-24 right-28">
          <div className="h-52 bg-red-600">saf</div>
          <span className="flex gap-4 items-center">
            <h2 className="text-xl font-bold">₹ 599</h2>
            <p className="line-through">₹ 1,999</p>
          </span>
          <Button>Add to cart</Button>
          

        </div>
  )
}

export default CourseComponent