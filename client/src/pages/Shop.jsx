import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import TypeBar from '../components/TypeBar'
// Основная страница

function Shop() {
  return (
    <Container>
      <Row className='mt-3'>
          <Col md={3}>
            < TypeBar />
          </Col>
            
          <Col md={9}>
            < BrandBar />
          </Col>
      </Row>
    </Container>
  )
}

export default Shop