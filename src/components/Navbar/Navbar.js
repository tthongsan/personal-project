import React, { Component } from 'react';
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
 

  render(){
  return (
    
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <h1><Link to="/"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrKnt_YURuIi355wbF4cQzXLXwlIjmg36DrQ75diTgUowkDKIkw" alt=""/></Link></h1>
        </div>
        <div className="navbar-list">
          <div><NavLink to="/mens" activeStyle={{color:'red'}} className="nav-links">Men's</NavLink></div>
          <div><NavLink to="/women" activeStyle={{color:'red'}} className="nav-links">Woman's</NavLink></div>
          <div><NavLink to="/new" activeStyle={{color:'red'}} className="nav-links">New Releases</NavLink></div>
          <div><NavLink to="/about" activeStyle={{color:'red'}} className="nav-links">About</NavLink></div>
          <div><NavLink to="/profile" className="nav-links">Login</NavLink></div>
        </div>
        <Link to="/cart">Shopping Cart</Link>
      </div>
      <div className="clear-fix"></div>
    </div>
  )
}
}

function mapStateToProps (state) {
  const {user} = state;
  return {user};
}


export default connect(mapStateToProps)(Navbar);
