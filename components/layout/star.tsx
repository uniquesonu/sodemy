import React from 'react'

export const StarComponent = ({rating,ratingCnt}:{rating: number, ratingCnt: string}) => {
  return (
    <div>
        {rating} ⭐⭐⭐⭐ <span className="text-slate-500">({ratingCnt})</span>
    </div>
  )
}
