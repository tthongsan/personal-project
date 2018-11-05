import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Mens from './components/Mens/Mens';
import Product from './components/Product/Product';
import MensNike from './components/MensNike/MensNike';
import MensAdidas from './components/MensAdidas/MensAdidas';
import MensVans from './components/MensVans/MensVans';
import Admin from './components/Admin/Admin';
import CartPage from './components/CartPage/CartPage';
import Profile from './components/Profile/Profile';
import MensConverse from './components/MensConverse/MensConverse';
import MensNewBalance from './components/MensNewBalance/MensNewBalance';
import MensUnderArmour from './components/MensUnderArmour/MensUnderArmour';
//import Womens from './components/'


export default 
<Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mens" component={Mens} />
    <Route path="/nike" component={MensNike}/>
    <Route path="/converse" component={MensConverse}/>
    <Route path="/adidas" component={MensAdidas} />
    <Route path="/product/:name" component={Product}/>
    <Route path="/vans" component={MensVans}/>
    <Route path="/admin" component={Admin} />
    <Route path="/cart" component={CartPage} />
    <Route path="/profile" component={Profile} />
    <Route path="/newbalance" component={MensNewBalance}/>
    <Route path="/underarmour" component={MensUnderArmour} />
</Switch>
// <Route path="/profile" component={Profile} />