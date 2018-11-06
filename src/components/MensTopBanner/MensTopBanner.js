import React from 'react';
import './MensTopBanner.css';
import {Link} from 'react-router-dom';

const MensTopBanner = () => {
  return (
    <div className="overall-container">
      <div className="banner-container">
        <img className="banner-img" src="https://s3.amazonaws.com/nikeinc/assets/48622/2015-Nike-Mag-02_hd_1600.jpg?1445446034" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/nike"> SHOP NIKE </Link></div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src="http://www.avenuelodge.co.uk/images/avenuelodge/Avenuelodge-Adidas-Ultra-Boost-Mens-Swtrin453.jpg" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/adidas"> SHOP ADIDAS </Link></div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src="https://i.ytimg.com/vi/pPHr6C8Pm00/maxresdefault.jpg" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/converse"> SHOP CONVERSE </Link></div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src="https://cdn.vox-cdn.com/thumbor/E6LuvGbvyEfV4j24xUI3zti_V5k=/0x0:1900x1013/1200x800/filters:focal(798x355:1102x659)/cdn.vox-cdn.com/uploads/chorus_image/image/58008007/MoreDubs1.0.jpg" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/underarmour"> SHOP UNDER ARMOUR </Link></div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src="https://cloudfront.sneakerdistrict.com/images2/DSCF01051-1600.jpg" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/vans"> SHOP VANS </Link></div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F10%2Fnew-balance-1500-robin-hood-available-now-1.jpg?q=75&w=800&cbr=1&fit=max" alt="" />
        <p className="banner-title"></p>
        <div className="banner-overlay"></div>
        <div className="banner-button"><Link to="/newbalance"> SHOP NEW BALANCE </Link></div>
      </div>
    </div>
  )
}

export default MensTopBanner;


// <div className="topbanner">
//       <button className="product-btn"><Link to="/nike">Shop Nike</Link></button>
//       <img src="https://s3.amazonaws.com/nikeinc/assets/48622/2015-Nike-Mag-02_hd_1600.jpg?1445446034" alt=""/>
//     </div>