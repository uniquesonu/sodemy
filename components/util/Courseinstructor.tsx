import React from 'react'

const CourseInstructor = () => {
  return (
    <div className='flex gap-32'>
      <div>Instructor</div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-start gap-8'>
        <img src="https://img-b.udemycdn.com/user/200_H/4466306_6fd8_3.jpg" className='w-24 h-24 rounded-full' alt="course-instructor" />
        <div>
        <h4>Colt Steele</h4>
        <p>Develop and Bootcamp Instructor</p>  
        </div>
        </div>
        <div className='flex gap-8 '>
          <p>youtube</p>
          <p>website</p>
        </div>
        <div>
          

Colt Steele
Developer and Bootcamp Instructor

Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives. My graduates work at companies like Google, Salesforce, and Square.

Most recently, I led Galvanize's SF's 6 month immersive program as Lead Instructor and Curriculum Director. After graduating from my class, 94% of my students went on to receive full-time developer roles. I also worked at Udacity as a Senior Course Developer on the web development team where I got to reach thousands of students daily.
        </div>
      </div>
    </div>
  )
}

export default CourseInstructor