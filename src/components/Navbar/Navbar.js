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
          <h1><Link to="/"><i class="far fa-grin-stars"></i></Link></h1>
        </div>
        <div className="navbar-list">
          <div><NavLink exact to="/mens" className="nav-links">Men's</NavLink></div>
          <div><NavLink exact to="/womens" className="nav-links">Woman's</NavLink></div>
          <div><NavLink exact to="/new" className="nav-links">New Releases</NavLink></div>
          <div><NavLink exact to="/about" className="nav-links">About</NavLink></div>
          <div><NavLink exact to="/profile" className="nav-links">Login</NavLink></div>
          <div><NavLink exact to="/cart" className="nav-links">Shopping Cart</NavLink></div>
        </div>
        
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
