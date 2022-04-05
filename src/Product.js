import React from 'react';
import  './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title, price, image, rating}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () =>{
        // Dispatch the item into the data layer
    }
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) =>(
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product