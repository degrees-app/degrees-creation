// navbar 
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink as RouterLink } from 'react-router';

export default function Header(): React.JSX.Element {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Degrees</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={RouterLink} to="/skins">
            skins.
          </Nav.Link>
          <Nav.Link as={RouterLink} to="/redactor">
            redactor.
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}