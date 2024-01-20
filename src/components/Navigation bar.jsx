import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faUser} from'@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from'@fortawesome/free-solid-svg-icons';
import { faCartShopping} from'@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <>
    <div>
    <Navbar expand="sm" className="bg-body-tertiary fixed-top" style={{boxShadow:'0px 1px 1.5px black',height:'50px'}}>
    <Container fluid>
      <Navbar.Brand href="#"><img src="converse.svg.svg" alt="" className="src" style={{height:'25px',overflow:'hidden'}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         <Nav.Link href="filterbtn" > <Link to ={'/men'} className="link-no-underline" ><p   style={{fontWeight:'550',marginTop:'10px',textDecoration:'none',textDecorationStyle:'none'}}>Men</p></Link> </Nav.Link>
         <Nav.Link href="filterbtn" > <Link to ={'/women'} className="link-no-underline" ><p   style={{fontWeight:'550',marginTop:'10px',textDecoration:'none',textDecorationStyle:'none'}}>Women</p></Link> </Nav.Link>
          <NavDropdown title="Others" id="navbarScrollingDropdown" style={{fontWeight:'550',marginTop:'10px'}}>
            <NavDropdown.Item href="#action3">Dress</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
             Shoes
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
             Kids
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" >
          <p  style={{fontWeight:'550',marginTop:'10px'}}>New Year Sale  </p>
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          
        <FontAwesomeIcon  className='navicon' icon={faUser} style={{color: "#000000",}} />
        <FontAwesomeIcon className='navicon' icon={faHeart} style={{color: "#000000",}} />
        <FontAwesomeIcon className='navicon' icon={faCartShopping} style={{color: "#000000",}} />
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{background:"balck",color:'red'}}
          /><Button variant="outline-dark"  className='seachbutton'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
   
</>

  )
}


export default Navigation