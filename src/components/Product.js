import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Product extends Component {
    render() {
        return (
            <div>
                
              <Link to="/details">

              <h3>Hello from Product</h3>
              </Link>
             
            </div>
        )
    }
}
