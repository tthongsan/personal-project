import React from 'react';
import './CartScroll.css';

const CartScroll = (props) => {
  return (
    <div className= "cart-scroller">
      {props.children}
    </div>
  );
};

export default CartScroll;