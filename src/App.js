import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51KlrHFSAgcLd4ctWvDXlSdlRh3vR5WURxdgSUZEJvaanAfh7DBpcpBYDndJK5J8zvEpOHVB89F5wHM9xsQwcGX3w00j3HkKZAC');

function App() {
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() =>{
    // Will only run once when the app compnent loads...
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        // the user just logged in/ user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path='/login' element = {[<Login/>]} />
            <Route path='/checkout' element = {[<Header />, <Checkout />]} />
            <Route path='/orders' element = {[<Header />, <Orders />]} />
            <Route path='/payment' element = {[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
            <Route path='/' element = {[<Header />, <Home />]} />           {/* Gets rendered out everytime rather the path is not specified */}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
