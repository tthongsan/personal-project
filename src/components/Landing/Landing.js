import React, { Component } from 'react';
import LandingBanner1 from '../LandingBanner1/LandingBanner1';
import './Landing.css';
import axios from 'axios';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    }
  }
  
handleChange = (val) => {
  this.setState({email: val})
}

handleClick = () => {
  const {email} = this.state;
  axios.post('/api/email', {email}).then(res => {
    alert('sent email')
  })
}

render () {
  return (
    <div className="landing-container">
      <LandingBanner1 />
        <div>
          <p className="email-text">enter email for discounts and updates</p>
          <input type="text" placeholder="enter email" onChange={(e) => this.handleChange(e.target.value)}/>
          
          <button onClick={() => this.handleClick()}>Sign up</button>
        </div>
    </div>
  )
}
}

export default Landing
