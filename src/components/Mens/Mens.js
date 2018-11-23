import React from 'react';
//import MensNike from '../MensNike/MensNike';
import MensTopBanner from '../MensTopBanner/MensTopBanner';
import './Mens.css';
import {NavLink} from 'react-router-dom';

const Mens = () => {
  return (
    <div className="mens-page">
        <h1 className="mens-title">Mens</h1>
        <div className="mens-links">
            <div><NavLink className="mens-nav" to="/nike">Nike</NavLink></div>
            <div><NavLink  className="mens-nav" to="/adidas">Adidas</NavLink></div>
            <div><NavLink  className="mens-nav" to="/converse">Converse</NavLink></div>
            <div><NavLink  className="mens-nav" to="/underarmour">Under Armour</NavLink></div>
            <div><NavLink  className="mens-nav" to="/vans">Vans</NavLink></div>
            <div><NavLink className="mens-nav" to="/newbalance">New Balance</NavLink></div>
        </div>
      <MensTopBanner/>
    </div>
  )
}

export default Mens
