
import React from 'react'
import { Checkbox } from '../ui/checkbox'

const VideoTopic = ({topic,rating}:{topic: string, rating: string}) => {
  return (
    <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="flex gap-2">
                  <h4>{topic}</h4>
                  <span className="opacity-70">({rating})</span>
                </div>
              </label>
            </div>
  )
}

export default VideoTopic