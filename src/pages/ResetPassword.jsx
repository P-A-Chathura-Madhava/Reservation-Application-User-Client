import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({ email }));
    };

  return (
    <div className="container">
    <h1 className="py-4">Reset Password</h1>
    <form onSubmit={handleSubmit} className="login_form">
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setEmail(e.target.value)}
      />
            <input
        type="text"
        placeholder="Confirm Password"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to={"/login"}>Cancel</Link>
    </form>
  </div>
  )
}

export default ResetPassword