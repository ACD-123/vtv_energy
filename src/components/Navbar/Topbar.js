import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link

export const Topbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to="/"><img width={220} src={require("../assets/logo/headerLogo.png")} alt="Google" /></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "space-around" }}>
            <Nav className='menunav'>
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/solar-energy" className="nav-link" activeClassName="active">Solar Energy</NavLink>
              <NavLink to="/wind-energy" className="nav-link" activeClassName="active">Wind energy</NavLink>
              <NavLink to="/Why-VTV" className="nav-link" activeClassName="active">Why VTV</NavLink>
              <NavLink to="/contact-us" className="nav-link" activeClassName="active">Contact & Support</NavLink>
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
