import React from 'react'
import { Button, Container } from 'react-bootstrap'

// Страница администрирования

function Admin() {
  return (
    <Container>
      <Button>Добавить тип</Button>
      <Button>Добавить бренд</Button>
      <Button>Добавить устройство</Button>
    </Container>
  )
}

export default Admin