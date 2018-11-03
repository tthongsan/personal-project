import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';

 class Admin extends Component {
     constructor() {
         super();
         this.state = {
             inventory: [],
             brand: '',
             style: '',
             price: null,
             image: '',
             details: ''
         }
     }

componentDidMount() {
    this.getEverything();
}

////////////////////ADD/EDITING/DELETING/ITEMS IN INVENTORY////////////////////////////////
getEverything = () => {
    axios.get('/api/product').then(res => {
        console.log(res.data)
        this.setState({inventory: res.data})
    })
}

addToInventory = () => {
    const {brand, style, name, price, image, details } = this.state;
    axios.post('/api/product', {brand: brand, style: style, name: name, price:price, image:image, details:details }).then(res => {
        this.setState({inventory: res.data})
    })
}

deleteItemsInInventory = (id) => {
    axios.delete(`/api/product/${id}`).then(res => {
        this.setState({inventory: res.data})
    })
    this.getEverything();
}



handleChange = (key, value) => {
    this.setState({
        [key]: value
    })
}


  render() {
      const {inventory} = this.state;
      let mappedInventory = inventory.map(item => {
          return <div className="inventory-list" key={item.id}>
            <p>{item.name}</p>
            $<p>{item.price}</p>
            <button onClick={() => this.deleteItemsInInventory(item.id)}>please delete</button>
          </div>
      })


    return (
      <div>
        inventory: {mappedInventory}
        brand<input type="text" onChange={(e) => this.handleChange('brand', e.target.value)}/>
        style<input type="text" onChange={(e) => this.handleChange('style', e.target.value)}/>
        name<input type="text" onChange={(e) => this.handleChange('name', e.target.value)}/>
        price<input type="number" onChange={(e) => this.handleChange('price', e.target.value)}/>
        image<input type="text" onChange={(e) => this.handleChange('image', e.target.value)}/>
        details<input type="text" onChange={(e) => this.handleChange('details', e.target.value)}/>
        <button onClick={() => this.addToInventory()}>PLEASE ADD</button>
      </div>
    )
  }
}

export default Admin;
