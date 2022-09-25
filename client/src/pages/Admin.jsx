import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaGalacticSenate } from 'react-icons/fa'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'



// Страница администрирования

function Admin() {

const [brandVisible, setBrandVisible] = useState(false)
const [typeVisible, setTypeVisible] = useState(false)
const [deviceVisible, setDeviceVisible] = useState(false)


  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} 
        className="mt-4"
        onClick={() => setTypeVisible(true)}
      >Добавить тип</Button>
      <Button variant={"outline-dark"} 
        className="mt-4"
        onClick={() => setBrandVisible(true)}
      >Добавить бренд</Button>
      <Button variant={"outline-dark"} 
        className="mt-4"
        onClick={() => setDeviceVisible(true)}
      >Добавить устройство</Button>

      <CreateType show = {typeVisible} onHide={() => setTypeVisible(false)}/>
      <CreateBrand show = {brandVisible}  onHide={() => setBrandVisible(false)}/>
      <CreateDevice show = {deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </Container>
  )
}

export default Admin