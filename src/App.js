import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="project-frontend-online-store">
        <Header />
        <Switch>
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/details/:id" component={ Details } />
          <Route exact path="/" component={ Main } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
