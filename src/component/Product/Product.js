import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {img, name,seller, price, stock} = props.product; //destructure//
    return (
        <div className="product">
            <div className="">
                <img src={img}alt=""/>
            </div>
            <div className="">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <br/>
                <p>${price}</p>
               
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="main-button"
                onClick = {() =>props.handleAddproduct(props.product)}>   
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button> 
                        
            </div>
        
        </div>
    );
};

export default Product;