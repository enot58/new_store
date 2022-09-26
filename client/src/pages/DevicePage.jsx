import React, {useEffect, useState} from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

// Страница одного из устройств

function DevicePage() {

  const [device, setDevice] = useState({info:[]})
  const {id} = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])


  return (
    <Container>
      <Row className="mt-4">
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_URL_API + device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex justify-content-center align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center">
              <Rating id={device.id} rating={device.rating}/>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <h1>Характеристики</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
}

export default DevicePage;
