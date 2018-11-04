import React from 'react';
import './MensTopBanner.css';
import {Link} from 'react-router-dom';

const MensTopBanner = () => {
  return (
    <div className="topbanner">
      <button className="product-btn"><Link to="/nike">Shop Nike</Link></button>
      <img src="https://s3.amazonaws.com/nikeinc/assets/48622/2015-Nike-Mag-02_hd_1600.jpg?1445446034" alt=""/>
    </div>
  )
}

export default MensTopBanner;
