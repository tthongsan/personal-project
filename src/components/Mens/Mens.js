import React from 'react';
//import MensNike from '../MensNike/MensNike';
import MensTopBanner from '../MensTopBanner/MensTopBanner';
import {Link} from 'react-router-dom';

const Mens = () => {
  return (
    <div>
    <MensTopBanner/>
    <Link to="/nike">nike</Link>
    </div>
  )
}

export default Mens
