import React from 'react';
import { useState } from 'react';

import { aboutme } from '../data';
import { Col, Container, Row } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';

const Naya = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  return (
    <>
      <Container className='p-5' style={{ textAlign: 'center' }}>
        <Row>
          <Col>
            <a
              href='https://github.com/nayamairena'
              target='_blank'
              rel='noreferrer'
            >
              <BsGithub
                size={60}
                color={isHovering ? '#60858B' : '#2f474b'}
                onMouseEnter={() => {
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
              />
            </a>
          </Col>
          <Col>
            <a
              href='https://www.linkedin.com/in/naya-mairena-flores-03322b15a/'
              target='_blank'
              rel='noreferrer'
            >
              <BsLinkedin
                size={60}
                color={isHovering2 ? '#60858B' : '#2f474b'}
                onMouseEnter={() => {
                  setIsHovering2(true);
                }}
                onMouseLeave={() => {
                  setIsHovering2(false);
                }}
              />
            </a>
          </Col>
          <Col>
            <a href='mailto:mnaya@pdx.edu'>
              <BsFillEnvelopeFill
                size={60}
                color={isHovering3 ? '#60858B' : '#2f474b'}
                onMouseEnter={() => {
                  setIsHovering3(true);
                }}
                onMouseLeave={() => {
                  setIsHovering3(false);
                }}
              />
            </a>
          </Col>
        </Row>
        <h1 className='p-5' style={{ fontWeight: 'bold', fontSize: 80 }}>
          Naya Mairena
        </h1>
        <Row>
          <Col lg={6}>
            <img
              src={require('../Images/' + aboutme.image)}
              alt='me'
              className='rounded-5'
            />
          </Col>
          <Col lg={6}>
            <p className='m-5' style={{ textAlign: 'left', fontSize: 20 }}>
              {aboutme.description}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Naya;
