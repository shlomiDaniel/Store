import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductsConsumer} from '../Context';
export default class Product extends Component {
    render() {
        const {id,title,img,price,icCart} = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               
                <div className="card">
                <ProductsConsumer>
              {(value)=>(<div className="img-container p-5" onClick={()=>{

                  value.handleDetail(id)
              }
            }>
                 
                 <Link to="/details">
         
                     <img src={img} alt="product" className="card-img-top"></img>
                        </Link>
                    <button className="cart-btn" disabled={icCart?true:false} onClick={()=>{
                        value.addToCart(id);
                        value.openModal(id);

                    }}>Order Here</button>
                          </div>)}
     
                 </ProductsConsumer>
                </div>
              
             <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5>{price}$</h5>
             </div>
             
            </div>
        )
    }
}
