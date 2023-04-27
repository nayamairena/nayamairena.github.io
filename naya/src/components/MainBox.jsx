import React from 'react';

const MainBox = (props) => {
  return (
    <div
      className='card p-2 m-5 mx-auto rounded-5'
      style={{ maxWidth: '900px' }}
    >
      <h4 class='card-title pt-3 fw-bold text-center'>{props.title}</h4>
      <h5>{props.subtitle}</h5>
      <p class='fst-italic text-center'>{props.description}</p>
      <div class='col-md-4 p-1'>
        {props.pic !== '' && (
          <img
            src={require('../Images/' + props.pic)}
            class='img-fluid w-100'
            alt='l'
          />
        )}
      </div>
    </div>
  );
};

export default MainBox;
