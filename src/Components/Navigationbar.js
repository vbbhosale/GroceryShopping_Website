import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { Cartstate } from './Context';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Navigationbar() {
  const {state:{cart},dispatch,productDispatch}=Cartstate()
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">goGreen & Healthy</Navbar.Brand>
          <Nav className="m-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Grocery"
              className="ms-auto"
              aria-label="Search"
              style={{width:"300px"}}
              onChange={(e)=>{productDispatch({
                type:'filterbysearch',
                payload:e.target.value
              })}}
            />
          </Form>
          </Nav>
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
          <BsCart style={{color:'white',height:'35px',width:'35px'}}/>
          <Badge bg="sucess">{cart.length}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'18rem',marginLeft:'-100px'}}>
        {cart.length>0?(
          <>{cart.map((prod)=>(
            <span key={prod.id} className='d-flex'>
              <img src={prod.image} alt={prod.name} className='h-25 w-25'/>
              <div className='d-flex'>
                <span>{prod.name}</span>
                <spna>{prod.price}</spna>
              </div>
              <i class='fa-solid fa-trash fs-5'
              onClick={()=>dispatch({
                type:'removefromcart',
                payload:prod,
              })}></i>
            </span>
          ))}
          <Link to='/Cart'>
            <Button variant='primary'>Go to Cart</Button>
          </Link>
          </>
        ):(<span>Cart is empty</span>)}
      </Dropdown.Menu>
    </Dropdown>

          {/* <BsFillCartCheckFill style={{color:'white'}}/> */}
          {/* <BsCart style={{color:'white',height:'35px',width:'35px'}}/>
          <h5><Badge bg="info">0</Badge></h5> */}
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar