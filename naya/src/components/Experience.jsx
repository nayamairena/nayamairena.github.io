import React from 'react';
import BV from '../Images/bvlogo.png';
import REU from '../Images/reulogo.png';
import Presentation from '../Images/presentation.jpg';
import Induction from '../Images/inductionme.png';
import GB from '../Images/gameboy.png';
import tam from '../Images/tamsticker.png';
import MainBox from './MainBox';
import { experience } from '../data';

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      {experience.map((me) => (
        <MainBox
          pic={me.image}
          title={me.title}
          subtitle={me.subtitle}
          description={me.description}
        />
      ))}
    </div>
  );
};

export default Experience;
