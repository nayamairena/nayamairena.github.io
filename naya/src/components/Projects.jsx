import React from 'react';

import MainBox from './MainBox';
import { projects } from '../data';
import { Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container>
      <h1
        className='my-5'
        style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 48 }}
      >
        Software Projects
      </h1>
      <Row md={2} lg={2} xl={2} xxl={4}>
        {projects.map((me) => (
          <Col>
            <MainBox
              pic={me.image}
              title={me.title}
              subtitle={me.subtitle}
              description={me.description}
              skills={me.skills}
              link={me.link}
              linkName={me.linkName}
              logo={me.logo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
