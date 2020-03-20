import React, { Component } from 'react'
import {ProductsConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
           
          <ProductsConsumer>
              
              {(value)=>{
                  const {modalOpen,closeModal} = value;
                  const {img,title,price} = value.modalProduct;

                  if(!modalOpen){
                    return null;
                }else{
                    
                   return (<div className="container">
                    <div className="row">
                        <div id ="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                           <div id="toCart">
                           <h5 >Item Added To The Cart</h5>
             
                            <img src={img} className="image-fluid" alt="product"></img>
                            <br></br> <br></br>
                            <h5 >{title}</h5>
                            <br></br>
                <h5 className="text-muted">price:${price}</h5>
                
                
                <Link to="/">
                <ButtonContainer onClick={()=>closeModal()}>
                    Store
                    </ButtonContainer>    
                </Link>

                <Link to="/cart">
                <ButtonContainer onClick={()=>closeModal()}>
                   Go To Cart
                    </ButtonContainer>    
                </Link>
                           </div>
                           
                        </div>
                        
                        
                        
                        
                        </div> 
  
     




                   </div>)
                }
                
              }}
          </ProductsConsumer>
        );
    }
}
