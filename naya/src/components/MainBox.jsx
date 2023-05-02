import React from 'react';
import { Col, Container, Row, Button, Modal, ModalBody } from 'react-bootstrap';
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
            <h4 class='fw-bold text-center'>{props.title}</h4>
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
            <h4 class='fw-bold text-center'>{props.title}</h4>
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
            {props.title} <h5 className='my-3 text-muted'>{props.subtitle}</h5>{' '}
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
              <p>{props.description}</p>
            </Row>
            {props.link && (
              <Row className='justify-content-center text-center my-5'>
                <Col>
                  <Button
                    href={props.link}
                    target='_blank'
                    style={{
                      backgroundColor: buttonHovering ? '#60858B' : '#2f474b',
                      border: 'none',
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

            {props.pic && (
              <Row className='justify-content-center text-center my-5'>
                <Col sm={'auto'}>
                  <img
                    src={require('../Images/' + props.pic)}
                    className='img-fluid'
                    style={{ maxWidth: 'auto' }}
                    alt='l'
                  />{' '}
                </Col>
              </Row>
            )}
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MainBox;
