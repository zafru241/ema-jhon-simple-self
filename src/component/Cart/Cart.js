import React from 'react';

const Cart = (props) => {
    const cart = props.cart
const totalPrice = cart.reduce((total, product) => total + product.price, 0);   

let shipping = 0;
if(totalPrice >35){
    shipping = 0;
}
else if(totalPrice> 15){
    shipping=4.99;
}
else if(totalPrice > 0){
    shipping =12.99
}

const tax = (totalPrice/15).toFixed(2);
const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

function formatNumber (num){
    const precision = num.toFixed(2);
    return Number(precision);
}


    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Product price:{formatNumber(totalPrice)}</p>
            <p><small>Shipping cost:{shipping}</small></p>
            <p><small>Tax + Vat:{tax}</small></p>
            <p>Order Total:{grandTotal}</p>
        </div>
    );
};

export default Cart;