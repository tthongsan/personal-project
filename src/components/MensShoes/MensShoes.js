import React, { Component } from 'react';
import './MensShoes.css';
import MensNikeShoes from '../../jsonFile/nikeMensLifeShoes.json';
import ReactModal from 'react-modal';
import Categories from '../Categories/Categories';
import Product from '../Product/Product';
import {Route, Link} from 'react-router-dom';

class MensShoes extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      shoeModalTrigger: false
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () =>  {
    this.setState({ showModal: false });
  }

// componentDidMount(){
//   console.log('hittttttt compdidmout')
//   setTimeout(() => {
//     this.getShoes()
//   },1001);
  
//   //this.forceUpdate();
// }

componentDidMount() {
  // this.getShoes();

}


// getShoes() {
//   axios.get('/api/nikes').then(res => {
//     //console.log(res.data[0].shoes_name)
//     console.log(res.data)
//     this.setState({nikeShoes: res.data})
//   })
// }




  render() {
    console.log('this.state.nikeshoes', this.state.nikeShoes)
      console.log('hit rennderrrrr')
      var mappednike = MensNikeShoes.map(shoe => {
        return (<div className="eachShoe" key={shoe.title}>
            <h4>{shoe.title}</h4>
            <h4>{shoe.localPrice}</h4>
            <Link to={`/product/${shoe.title}`}><img className="shoeimg" src={shoe.spriteSheet} alt=""/></Link>
            <button onClick={this.handleOpenModal}>Quick View</button>
            <button
                className="snipcart-add-item"
                data-item-id={shoe.title}
                data-item-name={shoe.title}
                data-item-price={shoe.rawPrice}
                data-item-image={shoe.spriteSheet}
                data-item-url="http://myapp.com/"
                data-item-description="xxx">
                    Add to cart
              </button> 
          </div>)
      })
    
    return (
        <div className="mensShoespage">
            <div className="displayShoes">
              {mappednike}
            </div>
            <ReactModal 
            className="modal"
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            ariaHideApp={false}
            > 
            <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
            
        </div>
    )
  }
}

export default MensShoes;
