import React from 'react';
import './WCategories.css';
import {NavLink} from 'react-router-dom';

function WCategories() {
  return (
    <div className="categories">
      <h2 className="cat-title">Brands</h2>
      <div className="brand-list">
        <div><NavLink exact to="/wadidas" className="cat-nav" activeStyle={{ color: 'red' }} >Adidas</NavLink></div>
        <div><NavLink exact to="/wconverse" className="cat-nav" activeStyle={{ color: 'red' }} >Converse</NavLink></div>
        <div><NavLink exact to="/wnike" className="cat-nav" activeStyle={{ color: 'red' }} >Nike</NavLink></div>
        <div><NavLink exact to="/wnewbalance" className="cat-nav" activeStyle={{ color: 'red' }} >New Balance</NavLink></div>
        <div><NavLink exact to="/wvans" className="cat-nav" activeStyle={{ color: 'red' }} >Vans</NavLink></div>
        <div><NavLink exact to="/wunderarmour" className="cat-nav" activeStyle={{ color: 'red' }} >Under Armour</NavLink></div>
      </div>
    </div>
  )
}

export default WCategories;