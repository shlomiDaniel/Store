import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data';

const ProductsContext = React.createContext();

 class ProductsProvider extends Component {
     state = {
         products : [],
         detailProduct : detailProduct,
         cart:[],
         modalOpen:true,
         modalProduct:detailProduct

     }
     handleDetail = (id)=>{
         const product = this.getItem(id);
         this.setState(()=>{
             return {detailProduct:product}
         })
     }

     addToCart = (id)=>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products:tempProducts,cart:[...this.state.cart,product]};
        },()=>{
            console.log(this.state);
        })
    }


    openModal = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }

    closeModal =()=>{
     
this.setState(()=>{
    return {modalOpen:false}
})

    }

    getItem = (id)=>{
    
        const product = this.state.products.find(p=>p.id===id);
        return product;
        
    }

    setProducts =()=> {
     
     let tempProducts = [];
     storeProducts.forEach(item=>{
         //coping the values
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem];

     }) 
     this.setState(()=>{
       return {products:tempProducts};
     })


    }


     

    componentDidMount(){
      this.setProducts();
    }
    render() {
        return (
            <div>
                <ProductsContext.Provider value={
                    {
                        ...this.state,
                        handleDetail:this.handleDetail,
                        addToCart:this.addToCart,
                        openModal: this.openModal,
                        closeModal:this.closeModal

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
