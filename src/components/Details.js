import React, { Component } from 'react'
import {ProductsConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Details extends Component {
    render() {
        return (
           <ProductsConsumer>
               {(val)=>{
              const {id,company,img,info,price,title,inCart} =  val.detailProduct;
              return (<div className="container py-5">
                  {}
                  <div className="row">
                      <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                   <h1>{title}</h1>
                    
                      </div>
                  </div>

                  <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                   <img src={img} className="img-fluid" alt="product"></img>

                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
               <h2>model:{title}</h2>

                      <h4 className="text-title text-uppercase text-muted mt03 mb-2">
               made by : <span className="text-uppercase">{company}</span> </h4>
                 <h4 className="text-blue"> 
                 <strong>
                     PRICE : 
                     <span>$</span>
                     {price}
                 </strong>
                 </h4>

                 <p className="text-capitalize font-weight-bold mt-3 mb-0" id="red">

                   some info about the product:

                 </p>
                 <br></br>
               <p className="text-muted lead">{info}</p>

                     <div>
                      <Link to="/">
                          <ButtonContainer>Back To Products</ButtonContainer>
                      </Link>
               <ButtonContainer 
               disabled={inCart?true:false}
               onClick={()=>{
                val.addToCart(id);
                val.openModal(id);

               }}
               >{inCart?'inCart':'add to cart'}</ButtonContainer>

                     </div>
                  </div>

                  </div>
                 
                  {}
              </div>)
               }}
           </ProductsConsumer>
        )
    }
}
