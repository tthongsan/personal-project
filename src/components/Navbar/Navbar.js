import React, { Component } from 'react';
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import {updateLoggin} from '../../ducks/reducer';
import {connect} from 'react-redux';

class Navbar extends Component {






  render(){
    console.log('logged in?',this.props.loggedIn)
  return (
    
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <p ><Link to="/" className="logo-title">
          <i class="fa fa-globe" aria-hidden="true"></i>
          </Link></p>
        </div>
        <div className="navbar-list">
          <div><NavLink exact to="/mens" activeStyle={{ color: '#fdd947' }} className="nav-links">Men's</NavLink></div>
          <div><NavLink exact to="/womens" activeStyle={{ color: '#fdd947' }} className="nav-links">Woman's</NavLink></div>
          <div><NavLink exact to="/about" activeStyle={{ color: '#fdd947' }} className="nav-links">About</NavLink></div>
            { this.props.user ?
              <div><Link to="/profile" className="profile-nav">Profile</Link></div>
              :
              <div><NavLink exact to="/profile" activeStyle={{ color: '#fdd947' }} className="nav-links">Login</NavLink></div>
            }
          <div><NavLink exact to="/cart" activeStyle={{ color: '#fdd947' }} className="nav-links">Shopping Cart</NavLink></div>
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
