import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Details from './components/Details';
import Default from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import {Switch,Route} from 'react-router-dom';
import Modal from './components/Modal';

function App() {
  return (
    
     <React.Fragment>
      <Nav></Nav>
      <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route  component={Default}></Route>
      </Switch>
      <Modal/>
     </React.Fragment>
    
  );
}

export default App;
