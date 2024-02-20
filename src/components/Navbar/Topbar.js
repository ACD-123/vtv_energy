import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
export const Topbar = () => {
  return (
   <>
 <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img width={200} src={require("../assets/logo/logo.png")} alt="Google" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{
    justifyContent: "space-around"
  }}>
          <Nav className='menunav'>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Solar Energy</Nav.Link>
            <Nav.Link href="#pricing">Wind energy</Nav.Link>
            <Nav.Link href="#pricing">Solar Energy</Nav.Link>
            <Nav.Link href="#pricing">Why VTV</Nav.Link>
            <Nav.Link href="#pricing"> Contact & Support</Nav.Link>
          </Nav>
          <Nav>
            <Button className='px-4 menuButton'>Get A Quote</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
