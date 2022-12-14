import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/common/Navbar'
import ProductList from './components/product/ProductList'
import NotFound from './components/common/NotFound'
import Cart from './components/common/Cart'
import ProductDetail from './components/product/ProductDetails'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={ProductDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
