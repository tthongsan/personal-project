import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer">
      <div>
        <div className="helper">
          <p>how can we help?</p>
          <div className="helper-links">
            <p className="hl">Customer Care</p>
            <p className="hl">Delivery</p>
            <p className="hl">Return And Exchanges</p>
            <p className="hl">Product Care</p>
            <p className="hl">Lifetime Warranty</p>
            <p className="hl">Size Charts</p>
            <p className="hl">FAQs</p>
          </div>
        </div>
      </div>
      <div>
      <div className="helper">
        <p>Our Products</p>
        <div className="product-links">
          <p className="hl">Crasftsmanship</p>
          <p className="hl">Styles</p>
          <p className="hl">Collaborations</p>
          <p className="hl">Fusion Fit</p>

        </div>
      </div>
    </div>
    <div>
    <div className="helper">
        <p>Our Story</p>
          <div className="helper-links">
            <p className="hl">Our History</p>
            <p className="hl">Eurostep & Basketball</p>
            <p className="hl">Eurostepers</p>
            <p className="hl">Product Care</p>
            <p className="hl">Investor Relations</p>
            <p className="hl">Press</p>
            <p className="hl">Careers</p>
          </div>
        </div>
    </div>
        <div className="foller">
          <span >follow us</span>
          <ul className="social-media">
            <li><i className="fa fa-twitter fa-2x"></i></li>
            <li><i className="fa fa-facebook fa-2x"></i></li>
            <li><a href="https://www.instagram.com/thomascooltea/?hl=en" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="country-copy">
        <div><i class="fas fa-flag-usa"></i> Copyright © 2018 Eurostep Inc.</div>
      </div>
    </div>
  )
}

export default Footer;