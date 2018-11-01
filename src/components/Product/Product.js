import React from 'react'


const Product = (props) => {
    const {shoe} = props.location.shoe
  return (
    <div>
      anyhitng here?
        
       <h1>{shoe.title}</h1>
       <h3>{shoe.localPrice}</h3> 
       <img src={shoe.spriteSheet} alt=""/> 

    </div>
  )
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