import React, { Component } from 'react'
import Title from '../Title';
import {ProductsConsumer} from '../../Context';
import CartCol from './CartCol'
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';


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
                            <CartList value={value} />
                            <CartTotal value={value}/>
                            </React.Fragment>
                            );
                            
                        }else{
                            console.log("adad");
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
