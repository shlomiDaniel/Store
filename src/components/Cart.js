import React, { Component } from 'react'
import Title from './Title';
import {ProductsConsumer} from '../Context';
import CartCol from '../components/CartCol';
import EmptyCart from '../components/EmptyCart';

export default class Cart extends Component {
    render() {
        return (

           
            <section>
                <ProductsConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                               <React.Fragment>
                            <Title name="your" title= "cart"/>
                            <CartCol />
                            </React.Fragment>
                            );
                            
                        }else{
                             return (
                                <EmptyCart  />

                             )
                            
                        }
                    }}
                 </ProductsConsumer>
               

              
            </section>

        
           
        )
    }
}
