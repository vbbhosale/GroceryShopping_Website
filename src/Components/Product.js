import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Cartstate } from './Context'

function Product({prod}) {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <div>
        {/* Product list */}
        <Card style={{ width: '18rem' }} className=''>
      <img src={prod.image} style={{height:"200px",width:"200px"}} className='img-fluid mx-auto d-block'/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>{prod.desc}<br/>{prod.Price}</Card.Text>
{cart.some((p)=>p.id===prod.id)?(<Button variant='danger' disabled={!prod.stock}
onClick={()=>dispatch({
  type:'removefromcart',
  payload:prod,
})}>Remove</Button>):(<Button variant='primary' disabled={!prod.stock}
onClick={()=>dispatch({
  type:'addtocart',
  payload:prod,
})}>
  {!prod.stock?'Out of stock':'Add to cart'}
</Button>)}

        {/* if stock is zero */}
        {/* <Button variant="primary" disabled={!prod.stock}>{!prod.stock?"Out of Stock":"Add to Cart"}</Button>
        <Button variant="danger" className='float-end'>Remove</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product