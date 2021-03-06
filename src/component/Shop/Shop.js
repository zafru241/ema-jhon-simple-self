import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);  // because we put items not number//

    const handleAddproduct = (product) => {
        console.log('Clicked', product);
    const newCart = [...cart, product];     //..because its an Array/items not number..//
        setCart(newCart);
}
   
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(product => 
                
                <Product 
                handleAddproduct ={handleAddproduct}  //..handleAddproduct is props here to send product.js..//
                product ={product}></Product>)
                }
           
            </div>
            <div className="cart-container">
               <Cart cart ={cart}></Cart>
            </div>
           
    
        </div>
    );
};

export default Shop;