import React, { Component } from 'react';
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import {updateLoggin} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Navbar extends Component {

  render(){
  return (
    
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <p ><Link to="/" className="logo-title">
          eur<i class="fa fa-globe" aria-hidden="true"></i>step
          </Link></p>
        </div>
        <div className="navbar-list">
          <div><NavLink exact to="/mens" activeStyle={{ color: 'red' }} className="nav-links">Men's</NavLink></div>
          <div><NavLink exact to="/womens" activeStyle={{ color: 'red' }} className="nav-links">Woman's</NavLink></div>
          <div><NavLink exact to="/new" activeStyle={{ color: 'red' }} className="nav-links">New Releases</NavLink></div>
          <div><NavLink exact to="/about" activeStyle={{ color: 'red' }} className="nav-links">About</NavLink></div>
            { this.props.loggedIn ?
              <div>Logout</div>
              :
              <div><NavLink exact to="/profile" activeStyle={{ color: 'red' }} className="nav-links">Login</NavLink></div>
            }
          <div><NavLink exact to="/cart" activeStyle={{ color: 'red' }} className="nav-links">Shopping Cart</NavLink></div>
        </div>
        
      </div>
      <div className="clear-fix"></div>
    </div>
  )
}
}

function mapStateToProps (state) {
  const {user, loggedIn} = state;
  return {
    user,
    loggedIn
  };
}


export default connect(mapStateToProps, {updateLoggin})(Navbar);
