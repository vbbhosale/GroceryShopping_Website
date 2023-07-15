import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Cartstate } from './Context';
import { Button } from 'react-bootstrap';

export default function Cart() {
  const {state:{cart},dispatch,}=Cartstate()
  const [total,setTotal]=useState()
  useEffect(()=>{
    setTotal(
      cart.reduce((acc,curr)=>acc+Number(curr.Price)*curr.qty,0)
    )
  },[cart])
  return (
    <div className='d-flex flex-row'>
      <ListGroup>
        {cart.map((prod)=>(
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <img src={prod.image} alt={prod.name} className='image-fluid rounded  h-200 w-25'/>
              </Col>
              <Col md={2}>
                <span>{prod.name}</span>
              </Col>
              {/* <Col md={2}>
                <span>{prod.Price}</span>
              </Col> */}
              <Col md={2}>
                <span>{prod.Price}</span>
              </Col>
              <Col md={2}>
              <Form.Select aria-lable="Default select example" value={prod.qty}
              onChange={(e)=>dispatch({
                type:'changecartqty',
                payload:{id:prod.id,qty:e.target.value},
              })}>
                {[...Array(prod.stock).keys()].map((x)=>(
                  <option key={x+1}>{x+1}</option>
                ))}
              </Form.Select>
              </Col>
              <Col md={2}>
                <i class='fa-solid fa-trash' onClick={()=>dispatch({
                  type:'removefromcart',
                  payload:prod,
                })}>
                </i>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}

      </ListGroup>
      <div className='bg-dark text-white fs-5 p-4'>
        <span className='mt-4'>Subtotal ({cart.length}) item(s)</span><br/><br/>
        <span className='mt-4'>Total ({total})</span><br/><br/>
        <Button disabled={cart.length===0} className='mt-4 bg-primary text-white'>Process to checkout</Button>
      </div>
    </div>
  )
}
