import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { reserveTrain } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const checkoutSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  pincode: yup.string().required("Pincode is required"),
  trainName: yup.string().required("Train Name is required"),
  seatClass: yup.string().required("Seat Class is required"),
  passengers: yup
    .number()
    .integer()
    .required("Passengers count Class is required"),
});

const Checkout = () => {
  // const booking = useSelector((state) => state.bookingSlice);
  // console.log(booking);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      trainName: "",
      seatClass: "",
      passengers: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      // console.log(values);
      // console.log(values.password);
      dispatch(reserveTrain(values));
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
  });

  return (
    <div className="container">
      <h2 className="checkout_header py-4 text-center">Checkout</h2>
      <form className="login_form" onSubmit={formik.handleSubmit}>
        {/* <input type="text" placeholder="First name" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="Firstname"
            name="firstname"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.firstname}
            onChange={formik.handleChange("firstname")}
            onBlur={formik.handleBlur("firstname")}
          />
          <div className="error">
            {formik.touched.firstname && formik.errors.firstname}
          </div>
        </div>
        {/* <input type="text" placeholder="Last name" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="Lastname"
            name="lastname"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.lastname}
            onChange={formik.handleChange("lastname")}
            onBlur={formik.handleBlur("lastname")}
          />
          <div className="error">
            {formik.touched.lastname && formik.errors.lastname}
          </div>
        </div>
        {/* <input type="text" placeholder="Address" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="Address"
            name="address"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.address}
            onChange={formik.handleChange("address")}
            onBlur={formik.handleBlur("address")}
          />
          <div className="error">
            {formik.touched.address && formik.errors.address}
          </div>
        </div>
        {/* <input type="text" placeholder="City" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="City"
            name="city"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.city}
            onChange={formik.handleChange("city")}
            onBlur={formik.handleBlur("city")}
          />
          <div className="error">
            {formik.touched.city && formik.errors.city}
          </div>
        </div>
        {/* <input type="text" placeholder="State" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="State"
            name="state"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.state}
            onChange={formik.handleChange("state")}
            onBlur={formik.handleBlur("state")}
          />
          <div className="error">
            {formik.touched.state && formik.errors.state}
          </div>
        </div>
        {/* <input type="text" placeholder="Pincode" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            fullWidth
            label="Pincode"
            name="pincode"
            size="small"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.pincode}
            onChange={formik.handleChange("pincode")}
            onBlur={formik.handleBlur("pincode")}
          />
          <div className="error">
            {formik.touched.pincode && formik.errors.pincode}
          </div>
        </div>
        {/* <select name="train" id="train">
          <option value="select">Select your train</option>
          <option value="train 2">train 1</option>
          <option value="train 3">train 2</option>
          <option value="train 4">train 3</option>
        </select> */}
        <div className="d-flex flex-column">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Train Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="trainName"
              value={formik.values.trainName}
              label="Train Name"
              onChange={formik.handleChange("trainName")}
              onBlur={formik.handleBlur("trainName")}
            >
              <MenuItem value={"ColomboExpress"}>Colombo Express</MenuItem>
              <MenuItem value={"KandyExpress"}>Kandy Express</MenuItem>
              <MenuItem value={"PanaduraExpress"}>Panadura Express</MenuItem>
            </Select>
          </FormControl>
          <div className="error ms-2 my-1">
            {formik.touched.trainName && formik.errors.trainName}
          </div>
        </div>
        {/* <select name="Class" id="class">
          <option value="select">Select your class</option>
          <option value="class A">class A</option>
          <option value="class B">class B</option>
          <option value="class E">class E</option>
        </select> */}
        <div className="d-flex flex-column">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Seat Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="seatClass"
              value={formik.values.seatClass}
              label="Seat Class"
              onChange={formik.handleChange("seatClass")}
              onBlur={formik.handleBlur("seatClass")}
            >
              <MenuItem value={"Class A"}>Class A</MenuItem>
              <MenuItem value={"Class B"}>Class B</MenuItem>
              <MenuItem value={"Class E"}>Class E</MenuItem>
            </Select>
          </FormControl>
          <div className="error ms-2 my-1">
            {formik.touched.seatClass && formik.errors.seatClass}
          </div>
        </div>
        {/* <input type="number" placeholder="seat count" /> */}
        <div className="d-flex flex-column">
          <TextField
            id="outlined-number"
            label="Number of Passengers"
            name="passengers"
            size="small"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values.passengers}
            onChange={formik.handleChange("passengers")}
            onBlur={formik.handleBlur("passengers")}
          />
          <div className="error">
            {formik.touched.passengers && formik.errors.passengers}
          </div>
        </div>
        {/* <button type="submit">Sign Up</button> */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <Button
            style={{
              borderColor: "black",
            }}
            variant="contained"
            type="submit"
          >
            Complete Booking
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
