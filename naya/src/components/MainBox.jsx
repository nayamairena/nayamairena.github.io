import React from 'react';
import { Col, Container, Row, Button, Modal, ModalBody } from 'react-bootstrap';
import { useState } from 'react';

const MainBox = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className='m-2'>
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
        {!isHovering && <h4 class='fw-bold text-center'>{props.title}</h4>}
        {isHovering && <h1>View Details</h1>}
      </Button>

      <Modal
        show={isClick}
        size={'xl'}
        onHide={() => {
          setIsClick(false);
        }}
      >
        <ModalBody>
          <Row>
            {props.pic && (
              <Col sm={'auto'}>
                <img
                  src={require('../Images/' + props.pic)}
                  className='img-fluid'
                  alt='l'
                />{' '}
              </Col>
            )}

            <Col>
              <h5>{props.subtitle}</h5>
              <p>{props.description}</p>
              {props.skills && (
                <p style={{ fontWeight: 'bold' }}>
                  Technical Tools: {props.skills}
                </p>
              )}
              {props.link && (
                <Button
                  href={props.link}
                  target='_blank'
                  style={{ backgroundColor: '#60858B' }}
                >
                  {props.linkName}
                </Button>
              )}
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MainBox;
