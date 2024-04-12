import React from 'react'
import Course from './Course'
import Total from './Total'

const page = () => {
  return (
    <div className='w-full container mx-auto min-h-screen'>
      <h1 className="text-3xl font-semibold my-8">Shopping Cart</h1>
        <div className="w-full container mx-auto flex gap-8">
      {/* <h1 className="text-3xl font-semibold my-8">Shopping Cart</h1> */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-1 gap-8">
        <Course
          title="Next.js 14 & React - The Complete Guide"
          author="Maximilian Schwarzmüller"
          rating={4.7}
          numReviews={16822}
          price={13.99}
          originalPrice={74.99}
        />
        
        <Course
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