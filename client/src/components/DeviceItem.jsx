import React, {useState} from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import Rating from './Rating'
import StarRating from './StarRating'

function DeviceItem({id, name, price, rating, img}) {

  const navigate = useNavigate()
  


  return (
    <Col  md={3} onClick={() => navigate(DEVICE_ROUTE + "/" + id)}>
      <Card style={{width: 150, cursor: "pointer", display: "flex", justifyContent: "center", margin: "5px", border: "1px solid grey"}

    }>
        < Image width={150} heigth={150} src={process.env.REACT_APP_URL_API + img} style={{margin: "3px"}}/>
        <div style={{display: "flex"}}>
            <div style={{margin: "5px"}}>{name}</div>
            <div style={{
              margin: "5px",
              padding: "2px",
              backgroundColor: "#41EBAC",
              borderRadius: "5px"           
              
            }}>{price} руб</div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Rating id={id} rating={rating}/>
        </div>
      </Card>
    </Col>
  )
}

export default DeviceItem