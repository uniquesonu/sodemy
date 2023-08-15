import React from 'react'
import { Button } from '../ui/button'

const Instructor = () => {
  return (
    <div className="flex items-center justify-center bg-background/10 shadow p-8">
      <div className="w-fit">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          alt="Left Side Image"
          className="w-fit h-auto"
        />
        {/* <Image
                src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
                alt="image"
                className="w-full h-auto"
                width={600}
                height={600}
                loading='lazy'
              /> */}
      </div>
      
      <div className="w-1/2 p-8 flex flex-col justify-evenly">
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