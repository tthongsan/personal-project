import React, { Component } from 'react';
//import './WomensConverse.css';
//import MensNikeShoes from '../../jsonFile/nikeMensLifeShoes.json';
import WCategories from '../WCategories/WCategories';
//import Product from '../Product/Product';
import {Link} from 'react-router-dom';
import Scroll from '../Scroll/Scroll';
import axios from 'axios';

class WomensUnderArmour extends Component {
  constructor () {
    super();
    this.state = {
      wunderarmour: []
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
  this.getWomensUnderArmour();
}


getWomensUnderArmour() {
  axios.get(`/api/product/${'wunderarmour'}`).then(res => {
    //console.log(res.data[0].shoes_name)
    console.log(res.data)
    this.setState({wunderarmour: res.data})
  })
}

addToCart = (name, price, image, id) => {
  axios.post('/api/cart', {name:name, price:price, image:image, id:id}).then(res => {
    console.log('added to cart', res)
  })
}



  render() {
    //console.log('this.state.nikeshoes', this.state.nikeShoes)
      //console.log('hit rennderrrrr')
 let mappedShoes = this.state.wunderarmour && this.state.wunderarmour.map(shoe => {
   return <div className="eachShoe" key={shoe.id}>
    <div className="img-box">
      <Link to={{pathname: `/product/${shoe.name}`, state:{shoe}}}><img className="shoeimg" src={shoe.image} alt=""/></Link>
    </div>
    <div className="plus-heart">
      <div className="shoe-desc">
        <h4>{shoe.name}</h4>
        <h3>Under Armour</h3>
        <p>${shoe.price}</p>
      </div>
      <div>
        <button className="product-btn" onClick={() => this.addToCart(shoe.name, shoe.price, shoe.image, shoe.id)}>
 
          Add to cart
        </button>
      </div>
      <div><i className="far fa-heart icon"></i></div> 
    </div>
   </div>
 })
    
    return (
      
          <div className="mensShoespage">
              <div className="displayShoes">
                
                  <h1>UNDER ARMOUR</h1>
                <div className="shoeCat-container">
                  <WCategories />
                  <Scroll>
                    {mappedShoes}
                  </Scroll>
                </div>
              </div>
    
          </div>
        
    )
  }
}

export default WomensUnderArmour;