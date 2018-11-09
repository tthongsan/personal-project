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
             details: '',
             quantity: null,
             adminLoggedIn: false,
             username: '',
             password: ''
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
    const {brand, style, name, price, image, details, quantity } = this.state;
    axios.post('/api/product', {brand: brand, style: style, name: name, price:price, image:image, details:details, quantity:quantity }).then(res => {
        this.setState({inventory: res.data})
    })
}

deleteItemsInInventory = (id) => {
    axios.delete(`/api/product/${id}`).then(res => {
        this.setState({inventory: res.data})
    })
    this.getEverything();
}

//////////////////////TO CART///////////////////////////////




handleChange = (key, value) => {
    console.log({[key]: value})
    this.setState({
        [key]: value
    })
}

/////////////////////////admin login/logout////////////////////////

login = () => {
    const username = this.state.username;
    const password = this.state.password;
    axios.post('/api/login', {
      username: username,
      password: password
    }).then(response => {
        console.log('send admin stuff',response)
        if(response.data.id === 2){
            this.setState({adminLoggedIn: true})
        } else {
            console.log('wrong dude')
        }
    })
  };

logout = () => {
    axios.post('/api/logout').then(response => {
        this.setState({ user: null });
    }).catch(error => {
        this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
    });
};

register = () => {

    axios.post('/api/register').then(response => {
      this.setState({ user: response.data });
    }).catch(error => {

    });
  };


  render() {
      
      const {inventory} = this.state;
      let mappedInventory = inventory.map(item => {
          return <div className="inventory-list" key={item.id}>
            <p>{item.name}</p>
            $<p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => this.deleteItemsInInventory(item.id)}>please delete</button>
          </div>
      })


    return (
      <div>
        { 
            this.state.adminLoggedIn 
            ?
            (
        <div className="admin-dash">
            inventory: {mappedInventory}
            brand<input type="text" onChange={(e) => this.handleChange('brand', e.target.value)}/>
            style<input type="text" onChange={(e) => this.handleChange('style', e.target.value)}/>
            name<input type="text" onChange={(e) => this.handleChange('name', e.target.value)}/>
            price<input type="number" onChange={(e) => this.handleChange('price', e.target.value)}/>
            image<input type="text" onChange={(e) => this.handleChange('image', e.target.value)}/>
            details<input type="text" onChange={(e) => this.handleChange('details', e.target.value)}/>
            quantity<input type="text" onChange={(e) => this.handleChange('quantity', e.target.value)}/>
            <button onClick={() => this.addToInventory()}>PLEASE ADD</button>
            <button onClick={this.logout}>Log Out</button>
        </div>
            )
        :
        <div className="admin-dash">
            admin only
            <div className="admin-dash">
                username:<input type="text" onChange={(e) => this.handleChange('username', e.target.value)}/>
                password:<input type="password" onChange={(e) => this.handleChange('password', e.target.value)}/>
                <button onClick={() => this.login()}>Log In</button>
                
            </div>
        </div>

        }
      </div>
    
    )
  }
}

export default Admin;

//<button onClick={() => this.register()}>CLICCICKCCLLCI</button>