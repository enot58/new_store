import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { ListGroup, Row } from 'react-bootstrap'
import {Context} from "../index"
import DeviceItem from './DeviceItem'


const DeviceList = observer(() => {

    const {device} = useContext(Context)

  return (
    <Row>
      {device.devices.map((deviceOneItem) => (
          <DeviceItem key={deviceOneItem.id} {...deviceOneItem}/>
      ))}
    </Row>
  )
})

export default DeviceList