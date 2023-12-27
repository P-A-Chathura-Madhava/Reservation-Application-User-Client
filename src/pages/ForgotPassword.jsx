import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPasswordToken } from "../features/user/userSlice";

const forgotPasswordSchema = yup.object({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email address is required")
  });

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
        // console.log(values.email);
      dispatch(forgotPasswordToken(values));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(login({ email }));
  };

  return (
    <div className="container">
      <h1 className="py-4">Reset Password</h1>
      <p>We will send an email to reset your password</p>
      <form onSubmit={formik.handleSubmit} className="login_form">
      <input
          type="text"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <div className="error">
          {formik.touched.email && formik.errors.email}
        </div>
        <button type="submit">Submit</button>
        <Link to={"/login"}>Cancel</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
