import React from 'react';
import { aboutme } from '../data';
import MainBox from './MainBox';

const Naya = () => {
  return (
    <div>
      {aboutme.map((me) => (
        <MainBox pic={me.image} title={me.title} description={me.description} />
      ))}
    </div>
  );
};

export default Naya;
