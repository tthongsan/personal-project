import React from 'react';
//import MensNike from '../MensNike/MensNike';
import MensTopBanner from '../MensTopBanner/MensTopBanner';
import './Mens.css';
import {NavLink} from 'react-router-dom';

const Mens = () => {
  return (
    <div className="mens-page">
      <h1 className="mens-title">Mens</h1>
        <ul className="mens-links">
            <li><NavLink className="mens-nav" to="/nike">Nike</NavLink></li>
            <li><NavLink  className="mens-nav" to="/adidas">Adidas</NavLink></li>
            <li><NavLink  className="mens-nav" to="/converse">Converse</NavLink></li>
            <li><NavLink  className="mens-nav" to="/underarmour">Under Armour</NavLink></li>
            <li><NavLink  className="mens-nav" to="/vans">Vans</NavLink></li>
            <li><NavLink className="mens-nav" to="/newbalance">New Balance</NavLink></li>
        </ul>
      <MensTopBanner/>
    </div>
  )
}

export default Mens
