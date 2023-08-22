import React from 'react'
import { Button } from '../ui/button'

const Certificate = () => {
  return (
    <div>
    <div className='flex gap-32 mb-4'>
        <div>Certificate</div>
        <div className='flex flex-col gap-4'>
            <h4>Get Sodemy Certificate by completing entire course</h4>
            <Button variant={'outline'} className='cursor-not-allowed'>Udemy Certificate</Button>
        </div>
        </div>
        <hr />
    </div>
  )
}

export default Certificate