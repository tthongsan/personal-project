import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Mens from './components/Mens/Mens';

import routes from './routes';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Navbar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
