import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProductsList from '../components/ProductList';
import Cart from '../components/Cart';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from '../components/Button';
export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
            
                  {

                      /* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
                  }
              <Link to="/"  >
              <img src={logo} alt="store" className="navbar-brand"></img>
            
              
              </Link>

             <ul className="ul.navbar-nav align-items-center">
             <li className="listPro">

             <Link to="/" className="nav-link"  className="listPro" >
            Products
            </Link>
             </li>
             </ul>
                 
             <Link className="ml-auto" to="/cart">
           <ButtonContainer>
               <span className="mr-2"><i className="fas fa-cart-plus"></i></span>
               My Cart
               </ButtonContainer>
             </Link>
                
                 
              
            </div>
        )
    }
}


