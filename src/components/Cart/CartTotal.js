import React from 'react'
import {Link} from 'react-router-dom';
export default function CartTotal({value}) {
    const {cartSubTotal,catTax,cartTotal,clearCart} = value;
    return (
       <React.Fragment>
           <div className="container">
               <div className="row">
<div className=" col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
<Link to="/">
    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>
</Link>

<h5>
    <span className="text-title text-right" style={{textAlign:"right"}}>
        subtotal:
    <strong>${cartSubTotal}</strong>
    </span>
</h5>
<h5>
    <span className="text-title">
        tax:
    <strong>${catTax}</strong>
    </span>
</h5>
<h5>
    <span className="text-title">
        total:
    <strong>${cartTotal}</strong>
    </span>
</h5>
               </div>
               </div>
           </div>
       </React.Fragment>
    )
}
