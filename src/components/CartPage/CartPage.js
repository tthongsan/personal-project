import React, { Component } from 'react';
import axios from 'axios';

class CartPage extends Component {

getCartItems(){
    axios.get('/api/cart').then(res => {
        console.log('getting cart items',res.body)
    })
}


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default CartPage;
