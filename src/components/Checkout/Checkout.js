import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Checkout.scss';

class Checkout extends Component {
  render() {
     let checkoutMap = this.props.location.state.item.map(item => {
         return <div className="items-check">
            
            <img className="items-check-img" src={item.image} alt=""/>
            <p>{item.name}</p>
         </div>
     })
     console.log(this.props.location.passThis.token)
     console.log(this.props.location.passThis.token.card)
     console.log(this.props.location.passThis.token.card.address_line1)
     const {card} = this.props.location.passThis.token


    return (
      <div className="checkout-container">
        <h1 className="check-title">THANK YOU FOR YOUR PURCHASE</h1>
        <div className="mapped-container">

           <div className="mapped-checkout"> {checkoutMap}</div>
            

            <div className="addressbox">
              <p>ships to</p>
              <p>{card.address_line1}</p>
              <p>{card.address_city}</p>
              <p>{card.address_state}</p>
              <p>{card.address_zip}</p>
            </div>
        </div>
        <Link to="/">return home</Link>
      </div>
    )
  }
}

export default Checkout;