import React, {Component} from 'react';
import './Products.css';


class Product extends Component{
  render(){
    //console.log('this.props.match.params.title ', this.props.match.params.title)
    
    console.log('sent shoes to product page',this.props.match.params.name)
    console.log('sent object to product page', this.props.location.state.shoe)
    const {shoe} = this.props.location.state;
  return (
    
    <div className="item-detail">
      <div className="item-with-desc">
        <img className="image-detail" src={shoe.image} alt=""/>
        <div className="item-desc">
          <p>{shoe.name}</p>
          <p>${shoe.price}</p>
          
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