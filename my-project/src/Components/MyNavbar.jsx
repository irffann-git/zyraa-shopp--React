import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import'./MyNavbar.css'
import { Link } from 'react-router-dom'

function MyNavbar() {
  return (
    <div>
    <Navbar className='navbar' expand="lg" sticky='top' style={{backgroundColor:"black"}}>
      <Container fluid className='gap-4'>
        <img src="logo (2).png" alt="d"  style={{width:"50px"}}/>
        <Navbar.Toggle aria-controls="navbarScroll" style={{color:"white",backgroundColor:"white"}} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-1 gap-3"
            style={{ maxHeight: '330px' }}
            navbarScroll
          >
            <Link to='/'>HOME</Link>
            <Link to='/Men'>MEN</Link>
            <Link to='/Women'>WOMEN</Link>
            <Link to='/Kids'>KIDS</Link>
            <Link to='/About'>ABOUT</Link>
             <Link to='/Contact'>CONTACT</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
            />
            <Button style={{color:"white ", backgroundColor:"red", border:"none"}}>Search</Button>
            <div className="icon d-flex gap-3 ps-4" style={{ color: "white", fontSize: "1.3rem", cursor: "pointer" }}>
              
              <Link to='/Cart'><FaShoppingCart /></Link>
              <Link to='/Favorite'><FaHeart /></Link>
              <Link to='/signup'><FaUser /></Link>
              
              
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar
