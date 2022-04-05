import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login">
        <Link to='/'>
            <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Logo" />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />
                <button className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Abhay's Conditions of Use & Sale. Please see out Privacy Notice, our Cookies Notice and our Interest-Based ads Notice.
            </p>

            <button className='login__registerButton'>Create you amazon account</button>
        </div>
    </div>
  )
}

export default Login