import React from 'react'
import {FaStar} from "react-icons/fa";
function StarRating({selected, onSelect}) {
  return (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
  )
}

export default StarRating;