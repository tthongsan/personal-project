import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div className= "scroller">
      {props.children}
    </div>
  );
};

export default Scroll;