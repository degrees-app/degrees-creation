import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink as RouterLink } from 'react-router';
import '../../shared/ui/globalStyles.css'; // Импортируйте файл стилей

export default function Header(): React.JSX.Element {
  return (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-brand" style={{ fontSize: '2rem' }}>
          Degrees°
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={RouterLink}
            to="/skins"
            className="nav-link"
            style={{ fontSize: '1.25rem', margin: '0 10px' }}
          >
            skins.
          </Nav.Link>
          <Nav.Link
            as={RouterLink}
            to="/redactor"
            className="nav-link"
            style={{ fontSize: '1.25rem', margin: '0 10px' }}
          >
            redactor.
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}