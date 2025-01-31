//структура сайта
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from '../../widgets/NavBar/NavBar';

// подключаем в роутер провайдер
export default function Layout():React.JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
