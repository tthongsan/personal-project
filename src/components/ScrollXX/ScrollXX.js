import React from 'react';
import './ScrollXX.css';

const ScrollXX = (props) => {
  return (
    <div className= "scrollerXX">
      {props.children}
    </div>
  );
};

export default ScrollXX;