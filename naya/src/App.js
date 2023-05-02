/*import Header from './components/Header';*/
import Naya from './components/Naya';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';
import { useState } from 'react';

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  return (
    <div className='App'>
      <Container style={{ textAlign: 'center' }}>
        <Row className='mt-5'>
          <Col>
            <h1
              style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 80 }}
            >
              Naya Mairena
            </h1>
          </Col>
        </Row>
        <Row xs={3} className='justify-content-center pb-5'>
          <Col md='auto'>
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
          <Col md='auto'>
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
          <Col md='auto'>
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
        <Row className='my-5'>
          <Naya />
        </Row>
        <Row className='my-5'>
          <Experience />
        </Row>
        <Row className='my-5'>
          <Projects />
        </Row>
      </Container>
    </div>
  );
}

export default App;
