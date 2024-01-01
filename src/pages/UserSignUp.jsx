import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email address is required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().required("Password is required"),
});

const UserSignUp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
    // console.log(values.name);
    // console.log(values.email);
    // console.log(values.mobile);
    // console.log(values.password);
    dispatch(registerUser(values));
    setTimeout(()=>{
      // alert("Admin Created Successfully");
      navigate("/login");
    }, 1000)
    },
  });

  // useEffect(() => {
  //   if (authState.createdUser !== null && authState.isError === false) {
  //     navigate("/login");
  //   }
  // }, [authState]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassowrd] = useState("");

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4">
      <h1 className="py-4">Sign Up</h1>
      <form className="login_form" onSubmit={formik.handleSubmit}>
      <TextField
          label="Name"
          fullWidth
          size="small"
          name="name"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
        />
        <div className="error">{formik.touched.name && formik.errors.name}</div>
        <TextField
          label="Email"
          fullWidth
          size="small"
          name="email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
        />
        <div className="error">
          {formik.touched.email && formik.errors.email}
        </div>
        <TextField
          label="Mobile"
          fullWidth
          size="small"
          name="mobile"
          variant="outlined"
          value={formik.values.mobile}
          onChange={formik.handleChange("mobile")}
          onBlur={formik.handleBlur("mobile")}
        />
        <div className="error">
          {formik.touched.mobile && formik.errors.mobile}
        </div>
        <TextField
          fullWidth
          size="small"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        <div className="error">
          {formik.touched.password && formik.errors.password}
        </div>
        <Button type="submit" variant="contained">Sign Up</Button>
      </form>
    </div>
  );
};

export default UserSignUp;
