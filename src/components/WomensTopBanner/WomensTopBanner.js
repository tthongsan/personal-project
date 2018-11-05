import React from 'react';
import './WomensTopBanner.css';
import {Link} from 'react-router-dom';

const WomensTopBanner = () => {
  return (
    <div class="overall-container">
      <div class="banner-container">
        <img class="banner-img" src="https://cdn5.kicksonfire.com/wp-content/uploads/2017/10/nike-air-presto-wmns-1.jpg?x33133" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/nike"> SHOP NIKE </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://sneakernews.com/wp-content/uploads/2017/06/adidas-nmd-r1-womens-exclusive-colorways-for-june-10th-01.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/adidas"> SHOP ADIDAS </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="http://www.booniespizza.com/images/FfFXO6Wr2z7e/womens-converse-shoes-chuck-taylor-all-star-pink-thunder-madison-27XB.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/converse"> SHOP CONVERSE </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="http://www.shoezoo.com/media/catalog/product/cache/1/image/8f516e588696e43446cb4318f9ddd697/1288354-001.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/underarmour"> SHOP UNDER ARMOUR </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://dsw.scene7.com/is/image/DSWShoes/349899_001_ss_01?$pdp-image$" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/vans"> SHOP VANS </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://dsw.scene7.com/is/image/DSWShoes/424556_137_ss_01?$pdp-image$" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/newbalance"> SHOP NEW BALANCE </Link></div>
      </div>
    </div>
  )
}

export default WomensTopBanner;