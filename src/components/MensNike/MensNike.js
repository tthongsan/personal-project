import React, { Component } from 'react';
import './MensNike.css';
//import MensNikeShoes from '../../jsonFile/nikeMensLifeShoes.json';
import Categories from '../Categories/Categories';
//import Product from '../Product/Product';
import {Link} from 'react-router-dom';
import Scroll from '../Scroll/Scroll';
import axios from 'axios';

class MensNike extends Component {
  constructor () {
    super();
    this.state = {
      nikes: []
    };
  }


// componentDidMount(){
//   console.log('hittttttt compdidmout')
//   setTimeout(() => {
//     this.getShoes()
//   },1001);
  
//   //this.forceUpdate();
// }

componentDidMount() {
  this.getNike();
}


getNike() {
  axios.get(`/api/product/${'nike'}`).then(res => {
    //console.log(res.data[0].shoes_name)
    console.log(res.data)
    this.setState({nikes: res.data})
  })
}

  render() {
    //console.log('this.state.nikeshoes', this.state.nikeShoes)
      console.log('hit rennderrrrr')
 let mappedShoes = this.state.nikes && this.state.nikes.map(shoe => {
   return <div className="eachShoe" key={shoe.id}>
    <h1>{shoe.name}</h1>
    <h1>{shoe.brand}</h1>
    <p>{shoe.price}</p>
    <Link to={{pathname: `/product/${shoe.name}`, state:{shoe}}}><img className="shoeimg" src={shoe.image} alt=""/></Link>
   </div>
 })
    
    return (
      
          <div className="mensShoespage">
          
              <div className="displayShoes">
                <Categories />
                  
                <Scroll>
                  {mappedShoes}
                </Scroll>
              </div>
    
          </div>
        
    )
  }
}

export default MensNike;


// var mappednike = MensNikeShoes.map(shoe => {
//   return (<div className="eachShoe" key={shoe.title}>
//       <h4>{shoe.title}</h4>
//       <h4>{shoe.localPrice}</h4>
//       <Link to={`/product/${shoe.title}`}><img className="shoeimg" src={shoe.spriteSheet} alt=""/></Link>
//       <div className="btn-box">
//         <button
//             className="snipcart-add-item product-btn"
//             data-item-id={shoe.title}
//             data-item-name={shoe.title}
//             data-item-price={shoe.rawPrice}
//             data-item-image={shoe.spriteSheet}
//             data-item-url="http://myapp.com/"
//             data-item-description="xxx">
//                 Add to cart
//           </button> 
//         </div>
//     </div>)
// })

// {mappednike}