import React from 'react';

import MainBox from './MainBox';
import { projects } from '../data';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className='my-5' style={{ textAlign: 'center' }}>
      <h1>Software Projects</h1>
      <Row>
        {projects.map((me) => (
          <Col>
            <MainBox
              pic={me.image}
              title={me.title}
              description={me.description}
              skills={me.skills}
              link={me.link}
              linkName={me.linkName}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
