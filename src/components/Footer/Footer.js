import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="payment">
        <span>Payment options</span>
        <ul className="payment-methods">
          <li><i className="fa fa-paypal"></i></li>
          <li><i className="fab fa-bitcoin"></i></li>
          <li><i className="fab fa-cc-visa"></i></li>
          <li><i className="fab fa-cc-mastercard"></i></li>
          <li><i className="fab fa-cc-discover"></i></li>
        </ul> 
      </div>
      <div>
        <span>follow us</span>
        <ul className="social-media">
          <li><i className="fa fa-twitter fa-2x"></i></li>
          <li><i className="fa fa-facebook fa-2x"></i></li>
          <li><a href="https://www.instagram.com/thomascooltea/?hl=en" target="_blank"><i className="fa fa-instagram fa-2x"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;