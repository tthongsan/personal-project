import React from 'react';
//import MensNike from '../MensNike/MensNike';
import MensTopBanner from '../MensTopBanner/MensTopBanner';
import './Mens.css';
import {Link} from 'react-router-dom';

const Mens = () => {
  return (
    <div>
    <h1 className="mens-title">Mens</h1>
    <MensTopBanner/>
    </div>
  )
}

export default Mens
