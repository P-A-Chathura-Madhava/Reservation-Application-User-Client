import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccessfull = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-center'>
        <h1 className='heading_confirmation_page'>Payment Successfull</h1>
        <Link to={"/"}>Back to home</Link>
    </div>
  )
}

export default PaymentSuccessfull