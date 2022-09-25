import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Card, Row } from 'react-bootstrap'
import {Context} from "../index"


const BrandBar = observer(() => {

    const {device} = useContext(Context)

  return (
    <Row className='d-flex'>
        {device.brands.map((brand) => (
            <Card key={brand.id} 
            style={{cursor: "pointer", width: '8rem', textAlign: 'center',
            
            margin: "0 5px 0 5px"}}
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? "blue" : "light"}
            >
                {brand.name}
            </Card>
        ))}
    </Row>
  )
})

export default BrandBar