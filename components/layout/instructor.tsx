import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Instructor = () => {
  return (
    <div className="flex items-center justify-center bg-background/10 shadow p-8 gap-8">
      <div className="w-fit">
        <Image
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt="Left Side Image"
          width={600}
          height={600}
          className="w-fit h-auto"
        />
      </div>
      
      <div className="w-1/2 p-8 flex flex-col justify-evenly gap-4">
        <h1 className="text-3xl font-bold mb-4 text-foreground">Become an instructor</h1>
        <p className="text-foreground text-xl mb-4">
        Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
        </p>
        <Button className='w-fit'>Start teaching today</Button>
      </div>
    </div>
  )
}

export default Instructor