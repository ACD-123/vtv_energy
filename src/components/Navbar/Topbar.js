import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Topbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="xl" style={{ background: 'rgba(11, 11, 11, 0.95)', borderBottom: '1px solid #4A4A4A', padding: '15px 0' }}>
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <span style={{ 
                fontFamily: "'Bebas Neue', 'Inter', sans-serif", 
                fontSize: '2.2rem', 
                color: '#FFFFFF', 
                letterSpacing: '2px',
                fontWeight: 'bold'
              }}>
                VTV <span style={{ color: '#00E5FF' }}>ENERGY</span>
              </span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: "space-between" }}>
            <Nav className='menunav mx-auto' style={{ background: 'transparent', gap: '10px' }}>
              <NavLink to="/" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Home
              </NavLink>
              <NavDropdown title={<span style={{ color: '#FFFFFF' }}>Solutions</span>} id="solutions-dropdown" className="custom-dropdown">
                <NavDropdown.Item as={NavLink} to="/solutions?tab=nuclear">Solutions Overview</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/solutions?tab=nuclear">Nuclear SMR</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/solutions?tab=gas">Natural Gas Peakers</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/solutions?tab=bess">Battery Storage (BESS)</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/commercial-infrastructure" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Commercial Infrastructure
              </NavLink>
              <NavLink to="/Why-VTV" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Why VTV
              </NavLink>
              <NavLink to="/foundation" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Foundation
              </NavLink>
              <NavLink to="/investor-relations" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Investors
              </NavLink>
              <NavLink to="/contact-us" className="nav-link" style={({ isActive }) => ({ color: isActive ? '#00E5FF' : '#FFFFFF', fontSize: '16px', fontWeight: '500' })}>
                Contact & Support
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/contact-us">
                <Button className='px-4 menuButton' style={{ background: '#00E5FF', color: '#0B0B0B', border: 'none', fontWeight: 'bold' }}>
                  Partner With Us
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
