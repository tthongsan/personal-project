import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
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
import WomensNike from './components/WomensNike/WomensNike';
import WomensAdidas from './components/WomensAdidas/WomensAdidas';
import WomensConverse from './components/WomensConverse/WomensConverse';
import WomensUnderArmour from './components/WomensUnderArmour/WomensUnderArmour';
import WomensVans from './components/WomensVans/WomensVans';
import WomensNewBalance from './components/WomensNewBalance/WomensNewBalance';
//import Womens from './components/'


export default 
<Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mens" component={Mens} />
    <Route path="/womens" component={Womens} />
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
    <Route path="/wnike" component={WomensNike} />
    <Route path="/wadidas" component={WomensAdidas} />
    <Route path="/wconverse" component={WomensConverse} />
    <Route path="/wunderarmour" component={WomensUnderArmour} />
    <Route path="/wvans" component={WomensVans} />
    <Route path="/wnewbalance" component={WomensNewBalance} />
</Switch>
// <Route path="/profile" component={Profile} />