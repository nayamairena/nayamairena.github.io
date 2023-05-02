import React from 'react';
import MainBox from './MainBox';
import { experience } from '../data';
import { Col, Container, Row } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className='my-5' style={{ textAlign: 'center' }}>
      <h1
        className='mb-5'
        style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 48 }}
      >
        Experience
      </h1>
      <Row md={2} lg={2} xl={2} xxl={4}>
        {experience.map((me) => (
          <Col>
            <MainBox
              pic={me.image}
              pic2={me.image2}
              title={me.title}
              subtitle={me.subtitle}
              description={me.description}
              skills={me.skills}
              logo={me.logo}
              flagex={true}
              link={me.link}
              linkName={me.linkName}
            />{' '}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
