import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "../features/auth/authSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { resetPassword } from "../features/user/userSlice";

const resetPasswordSchema = yup.object({
    password: yup.string().required("Password is required"),
  });

const ResetPasswordToken = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getToken = location.pathname.split("/")[2];
    // console.log(getToken);

    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          password: "",
        },
        validationSchema: resetPasswordSchema,
        onSubmit: (values) => {
            // console.log(values.password);
            dispatch(resetPassword({ token: getToken, password: values.password }));
            navigate("/login");
        },
      });

  return (
    <div className="container">
    <h1 className="py-4">Reset Password</h1>
    <form onSubmit={formik.handleSubmit} className="login_form">
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
            {/* <input
        type="text"
        placeholder="Confirm Password"
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      <button type="submit">Submit</button>
      <Link to={"/login"}>Cancel</Link>
    </form>
  </div>
  )
}

export default ResetPasswordToken