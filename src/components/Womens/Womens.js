import React from 'react';
//import MensNike from '../MensNike/MensNike';
import WomensTopBanner from '../WomensTopBanner/WomensTopBanner';
import './Womens.css';
import {NavLink} from 'react-router-dom';

const Womens = () => {
  return (
    <div className="mens-page">
    <h1 className="mens-title">Womens</h1>
    <ul className="mens-links">
      <li><NavLink className="mens-nav" to="/nike">Nike</NavLink></li>
      <li><NavLink  className="mens-nav" to="/adidas">Adidas</NavLink></li>
      <li><NavLink  className="mens-nav" to="/converse">Converse</NavLink></li>
      <li><NavLink  className="mens-nav" to="/underarmour">Under Armour</NavLink></li>
      <li><NavLink  className="mens-nav" to="/vans">Vans</NavLink></li>
      <li><NavLink className="mens-nav" to="/newbalance">New Balance</NavLink></li>
    </ul>
    <WomensTopBanner/>
    </div>
  )
}

export default Womens