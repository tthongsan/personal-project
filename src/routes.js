import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Mens from './components/Mens/Mens';
import Product from './components/Product/Product';
import Profile from './components/Profile/Profile';
//import Womens from './components/'


export default 
<Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mens" component={Mens} />
    <Route path={`/product/:title`} component={Product}/>
    <Route path="/profile" component={Profile} />
</Switch>