import React from 'react';
import './WomensTopBanner.css';
import {Link} from 'react-router-dom';

const WomensTopBanner = () => {
  return (
    <div class="overall-container">
      <div className="shoes-big-box">
      <div class="banner-container">
        <img class="banner-img" src="https://cdn5.kicksonfire.com/wp-content/uploads/2017/10/nike-air-presto-wmns-1.jpg?x33133" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wnike"> SHOP NIKE </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://sneakernews.com/wp-content/uploads/2017/06/adidas-nmd-r1-womens-exclusive-colorways-for-june-10th-01.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wadidas"> SHOP ADIDAS </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://sneakerstudio.com/eng_pl_SNEAKER-SHOES-CONVERSE-ALL-STAR-M9166-7467_1.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wconverse"> SHOP CONVERSE </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="http://www.shoezoo.com/media/catalog/product/cache/1/image/8f516e588696e43446cb4318f9ddd697/1288354-001.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wunderarmour"> SHOP UNDER ARMOUR </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://cdn.shopify.com/s/files/1/0409/9765/products/vans-old-skool-womens-sea-spray-VN0A38G1OI6-retro-sport-3_900x.jpg?v=1502905488" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wvans"> SHOP VANS </Link></div>
      </div>
      <div class="banner-container">
        <img class="banner-img" src="https://blog.finishline.com/wp-content/uploads/2015/01/150127-NB-Core-Collection-13.jpg" alt="" />
        <p class="banner-title"></p>
        <div class="banner-overlay"></div>
        <div class="banner-button"><Link to="/wnewbalance"> SHOP NEW BALANCE </Link></div>
      </div>
      </div>
    </div>
  )
}

export default WomensTopBanner;