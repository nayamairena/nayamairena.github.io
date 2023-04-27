import React from 'react';
import choco from '../Images/choc.png';
import pdx from '../Images/flypdx.png';
import MainBox from './MainBox';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        {projects.map((me) => (
          <MainBox
            pic={me.image}
            title={me.title}
            description={me.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
