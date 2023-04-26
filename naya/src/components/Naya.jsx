import React from 'react';
import mypic from '../Images/mypic.jpeg';

const Naya = () => {
  return (
    <div>
      <div>
        <div className='card m-5' style={{ maxWidth: '800px' }}>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img src={mypic} className='img-fluid rounded-circle' alt='...' />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title'>Welcome!</h5>
                <p className='card-text'>
                  My name is Naya and I am currently a student at Portland State
                  University studying Computer Science. I was first introduced
                  to Computer Science when I began studying at Mt.Hood Community
                  College. I was fascinated when learned the basics of computer
                  functionality, so I decided to pursue my bachelors in Computer
                  Science. Ever since pursuing a degree in Computer Science I
                  have improved in problem solving skills, computer knowledge,
                  and translated my strengths from previous work experiences
                  into computer programming. I have learned a variety of
                  Computer Science topics such as Data Structures, Algorithms,
                  Operating Systems, Web Development, Code Review, and
                  Information Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naya;
