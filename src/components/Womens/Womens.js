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
      <li><NavLink className="mens-nav" to="/wnike">Nike</NavLink></li>
      <li><NavLink  className="mens-nav" to="/wadidas">Adidas</NavLink></li>
      <li><NavLink  className="mens-nav" to="/wconverse">Converse</NavLink></li>
      <li><NavLink  className="mens-nav" to="/wunderarmour">Under Armour</NavLink></li>
      <li><NavLink  className="mens-nav" to="/wvans">Vans</NavLink></li>
      <li><NavLink className="mens-nav" to="/wnewbalance">New Balance</NavLink></li>
    </ul>
    <WomensTopBanner/>
    </div>
  )
}

export default Womens