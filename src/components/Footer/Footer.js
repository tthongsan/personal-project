import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="payment">
        <span>Payment options</span>
        <ul class="payment-methods">
          <li><i class="fa fa-paypal"></i></li>
          <li><i class="fab fa-bitcoin"></i></li>
          <li><i class="fab fa-cc-visa"></i></li>
          <li><i class="fab fa-cc-mastercard"></i></li>
          <li><i class="fab fa-cc-discover"></i></li>
        </ul> 
      </div>
      <div>
        <span>follow us</span>
        <ul class="social-media">
          <li><i class="fa fa-twitter fa-2x"></i></li>
          <li><i class="fa fa-facebook fa-2x"></i></li>
          <li><i class="fa fa-instagram fa-2x"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;