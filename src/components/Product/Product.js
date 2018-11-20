import React, {Component} from 'react';
import './Products.css';
import {connect} from 'react-redux';
import axios from 'axios';


class Product extends Component{

  addToCart = (name, price, image, id) => {
    axios.post('/api/cart', {name:name, price:price, image:image, id:id}).then(res => {
      console.log('added to cart', res)
    })
  }


  render(){
    //console.log('this.props.match.params.title ', this.props.match.params.title)
    
    console.log('sent shoes to product page',this.props.match)
    console.log('sent object to product page', this.props.location.state.shoe)
    const {shoe} = this.props.location.state;
    const {user} = this.props
  return (
    
    <div className="item-detail">
      <div className="item-with-desc">
        <div className="image-detail">
          <img className="product-img" src={shoe.image} alt=""/>
        </div>
        <div className="item-desc">
          <p className="product-title">{shoe.name}</p>
          <p className="product-price">${shoe.price}</p>
          <button className="product-btn" onClick={() => {
            user
            ?
              this.addToCart(shoe.name, shoe.price, shoe.image, shoe.id)
            :
              alert('please log in to add to cart')
          }}>
          Add to cart</button>
        </div>
  
      </div>
      <div className="product-desc">
        <span className="details">Details</span>
        <p className="shoe-details">{shoe.details}</p>
      </div>
    </div>
    )
  }
}

function mapStateToProps (state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(Product);;


// <button
// className="snipcart-add-item"
// data-item-id={shoe.title}
// data-item-name={shoe.title}
// data-item-price={shoe.rawPrice}
// data-item-image={shoe.spriteSheet}
// data-item-url="http://myapp.com/"
// data-item-description="xxx">
//     Buy now
// </button>



// const myItem = this.props.shoe.filter(item => {
//   if(item.name === this.props.match.params.name){
//     return item
//   }
// })


// console.log(myItem)
// const {title, localPrice, spriteSheet, rawPrice} = myItem[0]

// <button
// className="snipcart-add-item"
// data-item-id={title}
// data-item-name={title}
// data-item-price={rawPrice}
// data-item-image={spriteSheet}
// data-item-url="http://myapp.com/"
// data-item-description="xxx">
//     Add to cart
// </button> 