import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email address is required"),
    password: yup.string().required("Password is required"),
  });

const UserLogin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            // console.log(values.email);
            // console.log(values.password);
          dispatch(loginUser(values));
        },
      });

      // Redirect to home after login
      useEffect(() => {
        if (authState.user !== null && authState.isError === false) {
          navigate("/");
        }
      }, [authState]);

  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  return (
    <div className="container">
      <h1 className="py-4">Login</h1>
      <form className="login_form" onSubmit={formik.handleSubmit}>
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
        <input
          type="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <div className="error">
          {formik.touched.password && formik.errors.password}
        </div>
        <Link to={"/forgot-password"}>Forgot Password</Link>
        <button type="submit">Login</button>
        <Link to={"/signup"}>Sign Up</Link>
      </form>
    </div>
  );
};

export default UserLogin;