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

        <Navbar.Brand className="navbar-brand">Degrees°
        <div style={{fontSize:'10px'}}>creation platform</div>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={RouterLink} to="/redactor" className="nav-link">
            create
          </Nav.Link>
          <Nav.Link as={RouterLink} to="/skins" className="nav-link">
            gallery

          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}