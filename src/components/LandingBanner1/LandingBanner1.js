import React from 'react';
import video from './shoes.mp4'
import './LandingBanner1.css';

const LandingBanner1 = () => {
  return (
    <div className="fullscreen-video-wrap">
        <div className="overlay">
          <div className="sign">
          </div>
        </div>
      <video className="theVideo" src={video} autoPlay='' loop type="video"></video>
    </div>
  )
}

export default LandingBanner1;
