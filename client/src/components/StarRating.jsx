import React from 'react'
import {FaStar} from "react-icons/fa";
function StarRating({selected}) {
  return (
    <FaStar color={selected ? "red" : "grey"} />
  )
}

export default StarRating