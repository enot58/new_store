import React from 'react'

import StarRating from './StarRating';

const createArray = length => [...Array(length)];

function Rating({id, rating, totalRating = 5}) {

    

  return (
    <>
        {createArray(totalRating).map((n , i) => (
            <StarRating selected={rating > i} key={i} />
        ))}
    </>
  )
}

export default Rating