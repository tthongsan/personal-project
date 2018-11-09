import React, { Component } from 'react';
import architecture from './architecture.jpg';
import './About.css';


class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="img-overlay">
          <img className="about-img" src="https://ihg.scene7.com/is/image/ihg/Kimpton-Sacramento-hero" alt="city"/>
          <div class="text-block"> 
            <p>XXXX Layton Dr</p>
            <p>North Highlands, CA 95660</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
