import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

const CustomerLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e)=>setPassowrd(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default CustomerLogin