import React, { Component } from 'react';
import LandingBanner1 from '../LandingBanner1/LandingBanner1';
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
    <div>
      <LandingBanner1 />
      THis is the landing page
      <input type="text" placeholder="enter email" onChange={(e) => this.handleChange(e.target.value)}/>
      <button onClick={() => this.handleClick()}>Sign up</button>
    </div>
  )
}
}

export default Landing
