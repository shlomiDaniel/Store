import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductsConsumer} from '../Context';
export default class ProductList extends Component {
    
    constructor(){
        super();
        this.state={
            products :storeProducts
        }
    }


    render() {
       // console.log(this.state.products);
        return (
          <React.Fragment>
              <div className="py-5">
             <div className="container">
                 <Title name="our" title="products" />

                 

                 <div className="row">
        <ProductsConsumer>{(value)=>{
            return value.products.map(e=>{
                return <Product key={e.id} product={e}/>;

            })
           
        }
          
           

        
       }
        </ProductsConsumer>

                 </div>
             </div>

              </div>
          </React.Fragment>
        )
    }
}
