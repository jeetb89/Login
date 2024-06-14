import React from 'react'
import logo from './logo.png';

function Signingup() {
    return (
        <div className="container">
         <img src={logo} alt="logo" />
         <span className='success-info'>
        <p>Success!</p>
        <p>Thankyou for signing up with us</p>
        </span>
        <p className='info'>You are now a valued tumi member</p>
        </div>
        
    )
}

export default Signingup

