import React, { Component } from 'react';
import axios from 'axios';
import './CartPage.css';
import {connect} from 'react-redux';
import {updateLoggin} from '../../ducks/reducer';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import CartScroll from '../CartScroll/CartScroll';


class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0
    }
  }

componentDidMount() {
  this.getCartItems();
}

getCartItems(){
    axios.get('/api/cart').then(res => {
        let total = 0;
        if(res.data){
          res.data.map(item => {
            return total += item.price
          })
        }
        this.setState({
          cart: res.data,
          total: total
        })
    })
}

removeFromCart = (id) => {
  axios.delete(`/api/cart/${id}`).then(res => {
    this.getCartItems()
  })
}


onToken = (stripeToken) =>{
  console.log('onToken', stripeToken)
  axios.post('/api/charge',
    {
      method: 'POST',
      body: stripeToken,
      amount: this.state.total * 100
    }).then(response => {
      console.log('success', response.data.success)
    })
}
    




  render() {
    console.log('cart',this.state.cart)

    
    


    return (
      <div className="cart-container">
        <div className="title-cart">
          <h1 className="sando">SHOPPING CART</h1>
          <CartScroll>
          {
          this.props.loggedIn !== false || this.state.cart.length !== 0
          ? 
             this.state.cart.map(item => {
              return <div className="each-item">
                <img className="cart-img" src={item.image}/>
                <p className="cart-name">{item.name}</p>
                <p className="cart-price">{item.price}</p>
                
                <i onClick={() => this.removeFromCart(item.id)} class="fas fa-times"></i>
              </div>
            })
            : 
            <div>
              Please sign in
            </div>
          }
          </CartScroll>
        </div>
      <div className="order-summary">
          <div>
          <CartScroll>
          
          <h1 className="sando">ORDER SUMMARY</h1>
          {this.state.cart && this.state.cart.map(item => {
            return <div className="order-totals">
              <p>{item.name}</p>
              <p>${item.price}.00</p>
            </div>
          })}

          </CartScroll>
         

        <div className="cart-total">total: ${this.state.total}.00</div>
        { this.state.cart.length !== 0
          ?
            <div>
            <StripeCheckout
              stripeKey="pk_test_XojTq40wHrmEQPG7ytIBiaRo"
              token={this.onToken}
            />
            
                   </div>   
            :
            <div>add items to cart</div>
        }
        </div>
  
      </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {loggedIn} = state;
  return loggedIn
}

export default connect(mapStateToProps, {updateLoggin})(CartPage);


