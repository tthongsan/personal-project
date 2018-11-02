import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Mens from './components/Mens/Mens';
import Product from './components/Product/Product';
import MensNike from './components/MensNike/MensNike';
import MensAdidas from './components/MensAdidas/MensAdidas';
//import Profile from './components/Profile/Profile';
//import Womens from './components/'


export default 
<Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mens" component={Mens} />
    <Route path="/nike" component={MensNike}/>
    <Route path="/adidas" component={MensAdidas} />
    <Route path={`/product/:name`} component={Product}/>

</Switch>
// <Route path="/profile" component={Profile} />