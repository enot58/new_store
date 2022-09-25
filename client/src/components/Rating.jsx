import React, { useContext } from 'react'
import {Context} from ".."
import StarRating from './StarRating';

const createArray = length => [...Array(length)];




function Rating({id, rating, totalRating = 5 , onRate = f => f}) {

    const {device} = useContext(Context)



  return (
    <>
        {createArray(totalRating).map((n , i) => (
            <StarRating
              onClick={() => device.setSelectedRating(i)}
              selected={rating > i} 
              key={i} 
            />
        ))}
    </>
  )
}

export default Rating