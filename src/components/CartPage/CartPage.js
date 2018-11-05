import React, { Component } from 'react';
import axios from 'axios';
import './CartPage.css';
import {connect} from 'react-redux';
import {updateLoggin} from '../../ducks/reducer';

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
    {this.getCartItems()}
  })
}


  render() {
    
    return (
      <div>
      {
       this.props.loggedIn === true || this.state.cart.length !== 0
       ? 
        this.state.cart.map(item => {
          return <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image}/>
            <button onClick={() => this.removeFromCart(item.id)}>remove</button>
          </div>
        })
        : 
        <div>
          Log in to view cart
        </div>
      }
       total {this.state.total}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
}

export default connect(mapStateToProps, {updateLoggin})(CartPage);
