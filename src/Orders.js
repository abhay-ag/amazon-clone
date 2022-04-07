import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import Order from './Order'
import './Orders.css'
import { useStateValue } from './StateProvider'

function Orders() {
    const [orders, setOrders] = useState([])
    const [{basket, user}, dispatch] = useStateValue()

    useEffect(()=>{
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot =>(
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
    }, [user])
  return (
    <div className="orders">
        {user && <h1>Your orders</h1>}
        {!user && <div>
            <div className="orders__loggedOut">
                <h1>You are not logged in!!</h1>
                <h3>Please login to view your orders!</h3>
                <Link to= '/login'>
                    <button className='logBtn'>Login</button>
                </Link>
            </div>
        </div>}
        <div className="orders__order">
            {orders?.map(order => (
                <Order order = {order} />
            ))}
        </div>
    </div>
  )
}

export default Orders