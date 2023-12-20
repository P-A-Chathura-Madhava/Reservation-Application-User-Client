import React from 'react'

const Checkout = () => {
  return (
    <div className="container">
    <h1 className="py-4">Checkout</h1>
    <form className="login_form">
      <input
        type="text"
        placeholder="First name"
      />
      <input
        type="text"
        placeholder="Last name"
      />
            <input
        type="text"
        placeholder="Address"
      />
            <input
        type="text"
        placeholder="City"
      />
            <input
        type="text"
        placeholder="State"
      />
            <input
        type="text"
        placeholder="Pincode"
      />
        <select name="train" id="train">
            <option value="select">Select your train</option>
            <option value="train 2">train 1</option>
            <option value="train 3">train 2</option>
            <option value="train 4">train 3</option>
        </select>
        <select name="Class" id="class">
            <option value="select">Select your class</option>
            <option value="class A">class A</option>
            <option value="class B">class B</option>
            <option value="class E">class E</option>
        </select>
        <input type="number" placeholder='seat count' />
      <button type="submit">Sign Up</button>
    </form>
  </div>
  )
}

export default Checkout