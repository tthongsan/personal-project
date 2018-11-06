import React from 'react';
import './Categories.css';
import {NavLink} from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
      <h2 className="cat-title">Brands</h2>
      <div className="brand-list">
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/adidas">Adidas</NavLink></div>
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/converse">Converse</NavLink></div>
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/nike">Nike</NavLink></div>
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/newbalance">New Balance</NavLink></div>
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/vans">Vans</NavLink></div>
        <div><NavLink className="cat-nav" activeStyle={{ color: 'red' }} exact to="/underarmour">Under Armour</NavLink></div>
      </div>
    </div>
  )
}

export default Categories;