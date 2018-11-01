import React from 'react';
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <h1><Link to="/"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrKnt_YURuIi355wbF4cQzXLXwlIjmg36DrQ75diTgUowkDKIkw" alt=""/></Link></h1>
        </div>
        <ul className="navbar-list">
          <li><NavLink to="/mens" activeStyle={{color:'red'}} className="nav-links">Men's</NavLink></li>
          <li><NavLink to="/women" activeStyle={{color:'red'}} className="nav-links">Women's</NavLink></li>
          <li><NavLink to="/new" activeStyle={{color:'red'}} className="nav-links">New Releases</NavLink></li>
          <li><NavLink to="/about" activeStyle={{color:'red'}} className="nav-links">About</NavLink></li>
        </ul>
        <input className="nav-input" type="text" placeholder="Search"/>
        <a href="#" className="snipcart-checkout">checkout</a>
      </div>
    </div>
  )
}


export default Navbar;
