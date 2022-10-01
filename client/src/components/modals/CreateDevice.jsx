import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from "../.."
import {createDevice, fetchBrand, fetchDevice, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";


const CreateDevice = observer(({show, onHide}) => {



    const {device} = useContext(Context);

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    },[])

    const addInfo = () => {
      setInfo([...info, {title: '', description: '', id: Date.now()}])
    }

    const removeInfo = (id) => {
      setInfo(info.filter((i) => i.id !== id) )
    }

    const changeInfo = (key, value, id) => {
        setInfo(info.map((newItem) => newItem.id === id ? {...newItem, [key]: value} : newItem))
    }



    const addDevice = () => {
        const formData = new FormData();
        formData.append("name", name)
        formData.append("price", `${price}`)
        formData.append("img", file)
        formData.append("brandId", device.selectedBrand.id)
        formData.append("typeId", device.selectedType.id)
        formData.append("info", JSON.stringify(info))


        createDevice(formData).then(data => onHide())

    }

    const selectFile = e => {
        setFile(e.target.files[0])

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
                  <Dropdown.Toggle>{device.selectedType.name || "Выбрать тип"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {device.types.map((type) =>
                      <Dropdown.Item
                          onClick={() => device.setSelectedType(type)}
                          key={type.id}
                      >{type.name}</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-3">
                  <Dropdown.Toggle>{device.selectedBrand.name || "Выбрать бренд"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {device.brands.map((brand) => (
                      <Dropdown.Item
                          onClick={() => device.setSelectedBrand(brand)}
                          key={brand.id}
                      >{brand.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder='Введите наименование' />
                <Form.Control
                    onChange={selectFile}
                    type="file"
                    className="mt-3"/>
                <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    type="number"
                    className="mt-3" placeholder='Введите цену' />
                <hr/>
                <Button onClick={addInfo}>Добавить новое свойство</Button>
                {info.map((item) => (
                  <Row className='mt-3' key={item.id}>
                    <Col md={4}>
                        <Form.Control
                            value={item.title}
                            onChange={(e) => changeInfo('title',e.target.value, item.id)}
                          placeholder="Введите название"                        
                        />

                        
                    </Col>
                    <Col md={4}>
                        <Form.Control
                            value={item.description}
                            onChange={(e) => changeInfo('description',e.target.value, item.id)}
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
        <Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice;