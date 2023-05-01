import React from 'react';
import MainBox from './MainBox';
import { experience } from '../data';
import { Col, Container, Row } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className='my-5' style={{ textAlign: 'center' }}>
      <h1>Experience</h1>
      <Row>
        {experience.map((me) => (
          <Col>
            <MainBox
              pic={me.image}
              title={me.title}
              subtitle={me.subtitle}
              description={me.description}
            />{' '}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
