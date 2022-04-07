import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import './Payment.css'
import BasketItem from './BasketItem';
import { Link, useNavigate } from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const history = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate a special stripe secret which allows us to charge a customer
    const getClientSecret = async () =>{
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])
  

  const handleSubmit = async (event) => {
    // Stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card : elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) =>{
        // paymentIntent = payment conformation
        setSucceeded(true);
        setError(null)
        setProcessing(false);

        history('/orders')
    })
  }
  const handleChange = event =>{
    // listen for changes in card element
    // display the error as the customer types
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "")
  }
  return (
    <div className="payment">
       <div className="payment__container">
           <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
           <div className="payment__section">
                <div className="payment__title">
                    <h3>
                        Delivery Address
                    </h3>
                </div>
                <div className="payment__address">
                    <p>
                        {user?.email}
                    </p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
           </div>
           <div className="payment__section">
               <div className="payment__title">
                   <h3>
                       Review items and delivery
                   </h3>
               </div>
               <div className="payment__items">
                   {basket.map(item =>(
                       <BasketItem
                        id  = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                       />
                   ))}
               </div>
           </div>
           <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe is used for card management */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                            renderText={(value) =>(
                                <>
                                    <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale = {2}
                            value = {getBasketTotal(basket)}
                            displayType = {"text"}
                            thousandSeparator = {true}
                            prefix = {'$'}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
           </div>
        </div> 
    </div>
  )
}

export default Payment