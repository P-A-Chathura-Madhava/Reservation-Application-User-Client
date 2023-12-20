import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="container">
      <h1 className="py-4">Login</h1>
      <form onSubmit={handleSubmit} className="login_form">
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassowrd(e.target.value)}
        />
        <Link to={"/forgot-password"}>Forgot Password</Link>
        <button type="submit">Login</button>
        <Link to={"/signup"}>Sign Up</Link>
      </form>
    </div>
  );
};

export default UserLogin;
