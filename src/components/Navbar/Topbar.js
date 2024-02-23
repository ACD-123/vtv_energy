import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Topbar = () => {
  return (
   <>
 <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <Link to="/"><img width={200} src={require("../assets/logo/headerLogo.png")} alt="Google" /></Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{
    justifyContent: "space-around"
  }}>
          <Nav className='menunav'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/solar-energy" className="nav-link">Solar Energy</Link>
            <Link to="/wind-energy" className="nav-link">Wind energy</Link>
            <Link to="Why-VTV" className="nav-link">Why VTV</Link>
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
