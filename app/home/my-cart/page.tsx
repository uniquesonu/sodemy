import React from 'react'
import Course from './Course'
import Total from './Total'

const page = () => {
  return (
    <div className='w-full container mx-auto mb-16'>
      <h1 className="text-4xl font-bold my-8">Shopping Cart</h1>
        <div className="w-full container mx-auto flex gap-8">
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-1 gap-8">
        <Course
          imgURL="https://th.bing.com/th/id/OIP.IzKqeXIRSjV-7Rb_bR3k6QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          title="Next.js 14 & React - The Complete Guide"
          author="Maximilian Schwarzmüller"
          rating={4.7}
          numReviews={16822}
          price={13.99}
          originalPrice={74.99}
        />
        
        <Course
          imgURL="https://th.bing.com/th/id/OIP.IzKqeXIRSjV-7Rb_bR3k6QHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          title="OpenAI Python API Bootcamp: Learn to use AI, GPT, and more!"
          author="Jose Portilla"
          rating={4.5}
          numReviews={2498}
          price={13.99}
          originalPrice={74.99}
        />
      </div>
      <div className='w-1/4'>
      <Total total={27.98} discount={149.98} subTotal={85}/>
      </div>
    </div>
    </div>
  )
}

export default page