import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Header = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row className='justify-content-center'>
        <Col sm={10} md={8} lg={6} xl={5}>
          <p>hi</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
