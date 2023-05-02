import React from 'react';

import { aboutme } from '../data';
import { Col, Container, Row } from 'react-bootstrap';

const Naya = () => {
  return (
    <>
      <Container className='' style={{ textAlign: 'center' }}>
        <Row xs={1} sm={1} md={2} className='justify-content-center'>
          <Col md='auto'>
            <img
              src={require('../Images/' + aboutme.image)}
              alt='me'
              className='rounded-5 mb-5'
            />
          </Col>
          <Col className='mx-5'>
            <p
              style={{
                textAlign: 'left',
                fontSize: 20,
                whiteSpace: 'pre-line',
              }}
            >
              {aboutme.description}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Naya;
