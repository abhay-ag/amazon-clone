import React from 'react'
import './BasketItem.css'

function BasketItem({id, image, title, price, rating}) {
  return (
    <div className="basketItem">
        <img className='basketItem__image' src={image} alt="Product" />
        <div className="basketItem__info">
            <p className="basketItem__title">{title}</p>
            <p className="basketItem__price">
                <small>$</small>    
                <strong>{price}</strong>
            </p>
            <div className="basketItem__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))
                }
            </div>
            <button>Remove from basket</button>
        </div>
    </div>
  )
}

export default BasketItem