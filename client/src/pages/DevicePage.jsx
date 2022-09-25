import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

// Страница одного из устройств

function DevicePage() {
  const device = {
    id: 1,
    name: "Iphone20",
    price: 300,
    rating: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU",
  };

  const description = [
    { id: 1, title: "Оперативная память", description: "5 гб" },
    { id: 2, title: "Камера", description: "12 Мп" },
    { id: 3, title: "Процессор", description: "Snapdragon" },
    { id: 4, title: "Количество ядер", description: "8" },
    { id: 5, title: "Аккумулятор", description: "4000 mA" },
  ];

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex justify-content-center align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center">
              {device.rating}
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
        {description.map((info, index) => (
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
