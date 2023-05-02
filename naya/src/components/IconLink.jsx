import React from 'react';
import { useState } from 'react';

const IconLink = (icon, link) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a href={link} target='_blank' rel='noreferrer'>
      {React.createElement(icon, {
        size: 60,
        color: isHovering ? '#60858B' : '#2f474b',
        onMouseEnter: () => {
          setIsHovering(true);
        },
        onMouseLeave: () => {
          setIsHovering(false);
        },
      })}
    </a>
  );
};

export default IconLink;
