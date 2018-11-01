import React, {Component} from 'react';
import data from '../../jsonFile/nikeMensLifeShoes.json';


class Product extends Component{
  render(){
    //console.log('this.props.match.params.title ', this.props.match.params.title)
    
  const myItem = data.filter(item => {
    if(item.title === this.props.match.params.title){
      return item
    }
  })
  console.log(myItem)
  const {title, localPrice, spriteSheet, rawPrice} = myItem[0]

  return (
    <div>
      anyhitng here?
        <p>{title}</p>
        <p>{localPrice}</p>
        <img src={spriteSheet} alt=""/>
        <button
                className="snipcart-add-item"
                data-item-id={title}
                data-item-name={title}
                data-item-price={rawPrice}
                data-item-image={spriteSheet}
                data-item-url="http://myapp.com/"
                data-item-description="xxx">
                    Add to cart
        </button> 
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