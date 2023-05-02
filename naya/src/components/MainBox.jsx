import React from 'react';
import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  ModalBody,
  Carousel,
} from 'react-bootstrap';
import { useState } from 'react';

const MainBox = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [buttonHovering, setButtonHovering] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className='m-2 justify-content-center'>
      <Button
        style={{
          height: '300px',
          width: '300px',
          backgroundColor: isHovering ? '#60858B' : '#2f474b',
          border: 'none',
        }}
        className='rounded-5'
        onClick={() => {
          setIsClick(true);
        }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        {isHovering && (
          <>
            <h4
              style={{ wordWrap: 'break-word', fontSize: 21 }}
              class='fw-bold text-center'
            >
              {props.title}
            </h4>
            <p>Click to view details</p>
          </>
        )}
        {!isHovering && [
          props.logo ? (
            <img
              className='text-center img-fluid p-3'
              src={require('../Images/' + props.logo)}
              alt='temp'
            ></img>
          ) : (
            <h4
              style={{ wordWrap: 'break-word', fontSize: 21 }}
              class='fw-bold text-center'
            >
              {props.title}
            </h4>
          ),
        ]}
      </Button>

      <Modal
        style={{ fontFamily: 'monospace' }}
        show={isClick}
        size={'lg'}
        onHide={() => {
          setIsClick(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p style={{ fontSize: 30 }}>{props.title}</p>{' '}
            <h5 className='my-3 text-muted'>{props.subtitle}</h5>{' '}
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Container>
            <Row>
              {props.skills && (
                <p style={{ fontWeight: 'bold' }}>
                  Technical Tools: {props.skills}
                </p>
              )}
              <p
                style={{
                  fontSize: 20,
                  whiteSpace: 'pre-line',
                }}
              >
                {props.description}
              </p>
            </Row>
            {props.link && (
              <Row>
                <Col className='text-center py-3'>
                  <Button
                    href={props.link}
                    target='_blank'
                    style={{
                      backgroundColor: buttonHovering ? '#60858B' : '#2f474b',
                      border: 'none',
                      height: 50,
                      paddingTop: 12,
                    }}
                    onMouseEnter={() => {
                      setButtonHovering(true);
                    }}
                    onMouseLeave={() => {
                      setButtonHovering(false);
                    }}
                  >
                    {'View ' + props.linkName}
                  </Button>
                </Col>
              </Row>
            )}

            {props.pic && [
              props.pic2 ? (
                <Carousel interval={2500}>
                  <Carousel.Item>
                    {' '}
                    <img
                      src={require('../Images/' + props.pic)}
                      className='img-fluid'
                      alt='l'
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require('../Images/' + props.pic2)}
                      className='img-fluid'
                      alt='l'
                    />
                  </Carousel.Item>
                </Carousel>
              ) : (
                <Row className='justify-content-center text-center my-5'>
                  <Col sm={'auto'}>
                    <img
                      src={require('../Images/' + props.pic)}
                      className='img-fluid'
                      alt='l'
                    />{' '}
                  </Col>
                </Row>
              ),
            ]}
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MainBox;
