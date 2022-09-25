import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from "../.."


function CreateDevice({show, onHide}) {

    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
      setInfo([...info, {title: '', description: '', id: Date.now()}])
    }

    const removeInfo = (id) => {
      setInfo(info.filter((i) => i.id !== id) )
    }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Dropdown>
                  <Dropdown.Toggle>Выбрать тип</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {device.types.map((type) => (
                      <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-3">
                  <Dropdown.Toggle>Выбрать бренд</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {device.brands.map((brand) => (
                      <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Control className="mt-3" placeholder='Введите наименование' />
                <Form.Control type="file" className="mt-3"/>
                <Form.Control type="number" className="mt-3" placeholder='Введите цену' />
                <hr/>
                <Button onClick={addInfo}>Добавить новое свойство</Button>
                {info.map((item) => (
                  <Row className='mt-3' key={item.id}>
                    <Col md={4}>
                        <Form.Control
                          placeholder="Введите название"                        
                        />

                        
                    </Col>
                    <Col md={4}>
                        <Form.Control
                          placeholder="Введите описание" 
                        />
                    </Col>
                    <Col md={4}>
                        <Button
                          onClick={() => removeInfo(item.id)} 
                          variant="outline-danger">
                            Удалить
                          </Button>
                    </Col>
                  </Row>
                ))}
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
        <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice