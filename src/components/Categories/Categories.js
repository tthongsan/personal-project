import React from 'react';
import './Categories.css';
import {Link} from 'react-router-dom';

function Categories() {
  return (
    <div className="categories">
      <h1>Brands</h1>
      <div className="brand-list">
        <Link to="/adidas"><h3>Adidas</h3></Link>
        <h3>Converse</h3>
        <Link to="/nike"><h3>Nike</h3></Link>
        <h3>New Balance</h3>
        <Link to="/vans"><h3>Vans</h3></Link>
        <h3>Under Armour</h3>
      </div>
    </div>
  )
}

export default Categories;