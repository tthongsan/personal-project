import React from 'react';
import './Categories.css';
import {NavLink} from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
      <h2 className="cat-title">Brands</h2>
      <div className="brand-list">
        <div><NavLink exact to="/adidas" className="cat-nav" activeStyle={{ color: 'red' }} >Adidas</NavLink></div>
        <div><NavLink exact to="/converse" className="cat-nav" activeStyle={{ color: 'red' }} >Converse</NavLink></div>
        <div><NavLink exact to="/nike" className="cat-nav" activeStyle={{ color: 'red' }} >Nike</NavLink></div>
        <div><NavLink exact to="/newbalance" className="cat-nav" activeStyle={{ color: 'red' }} >New Balance</NavLink></div>
        <div><NavLink exact to="/vans" className="cat-nav" activeStyle={{ color: 'red' }} >Vans</NavLink></div>
        <div><NavLink exact to="/underarmour" className="cat-nav" activeStyle={{ color: 'red' }} >Under Armour</NavLink></div>
      </div>
    </div>
  )
}

export default Categories;