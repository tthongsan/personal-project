import React, { Component } from 'react';
import './MensVans.css';
//import MensNikeShoes from '../../jsonFile/nikeMensLifeShoes.json';
import Categories from '../Categories/Categories';
//import Product from '../Product/Product';
import {Link} from 'react-router-dom';
import Scroll from '../Scroll/Scroll';
import axios from 'axios';

class MensVans extends Component {
  constructor () {
    super();
    this.state = {
      vans: []
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
  this.getVans();
}


getVans() {
  axios.get(`/api/product/${'vans'}`).then(res => {
    //console.log(res.data[0].shoes_name)
    console.log(res.data)
    this.setState({vans: res.data})
  })
}

  render() {
    //console.log('this.state.nikeshoes', this.state.nikeShoes)
      //console.log('hit rennderrrrr')
      let mappedShoes = this.state.vans && this.state.vans.map(shoe => {
        return <div className="eachShoe" key={shoe.id}>
         <div className="img-box">
           <Link to={{pathname: `/product/${shoe.name}`, state:{shoe}}}><img className="shoeimg" src={shoe.image} alt=""/></Link>
         </div>
         <div className="plus-heart">
           <div className="shoe-desc">
             <h4>{shoe.name}</h4>
             <h3>{shoe.brand}</h3>
             <p>${shoe.price}</p>
           </div>
           <div><button className="product-btn">Add to cart</button></div>
           <div><i className="far fa-heart icon"></i></div>
         </div>
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

export default MensVans;