import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductsContext = React.createContext();

 class ProductsProvider extends Component {
     state = {
         products : storeProducts,
         detailProduct : detailProduct

     }
     handleDetail = ()=>{
         console.log("hello from detail");
     }

     addToCart = ()=>{
        console.log("hello from cart");
    }


    render() {
        return (
            <div>
                <ProductsContext.Provider value={
                    {
                        ...this.state,
                        handleDetail:this.handleDetail,
                        addToCart:this.addToCart

                    }
                }>
                    {this.props.children}
                </ProductsContext.Provider>
            </div>
        )
    }
}
const ProductsConsumer = ProductsContext.Consumer;

export {ProductsConsumer,ProductsProvider};
