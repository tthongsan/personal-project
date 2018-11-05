import React, {Component} from 'react';
import './Products.css';
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
  return (
    
    <div className="item-detail">
      <div className="item-with-desc">
        <img className="image-detail" src={shoe.image} alt=""/>
        <div className="item-desc">
          <p>{shoe.name}</p>
          <p>${shoe.price}</p>
          <button onClick={() => this.addToCart(shoe.name, shoe.price, shoe.image, shoe.id)}>Add to cart</button>
        </div>
  
      </div>
      <div>
      <span>Description</span>
      <p>{shoe.details}</p>
      </div>
    </div>
    )
  }
}

export default Product;


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