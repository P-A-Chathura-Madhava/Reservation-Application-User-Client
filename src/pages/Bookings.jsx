import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import img1 from "../images/image-01.jpg";
import img2 from "../images/image-02.jpg";
import img3 from "../images/image-03.jpg";
import img4 from "../images/image-04.jpg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { assignValues } from "../features/booking/bookingSlice";
import { useDispatch } from "react-redux";

const bookingSchema = yup.object({
  passengers: yup.number().integer().required("Required"),
  from: yup.string().required("Required"),
  to: yup.string().required("Required"),
  departureDate: yup.date().required("Required"),
  returnDate: yup.date().nullable(),
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#28292b" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const Bookings = () => {

  const [showDatePicker, setShowDatePicker] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const formik = useFormik({
    initialValues: {
      passengers: "",
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
    },
    validationSchema: bookingSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(assignValues(values));
      navigate("/checkout");
    },
  });

  return (
    <div id="bookings" className="bookingCard container">
    <div className="booking_card_left">
      <h2 className="booking_card_title">Book Your Seat</h2>
      <p className="booking_card_subtitle">You can book both ways</p>
    </div>
    <div className="booking_card_right">
      <div className="booking_card_container">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="booking_card_right_upper">
            <div className="form-outline d-flex flex-column mt-4">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="from"
                  value={formik.values.from}
                  label="From"
                  onChange={formik.handleChange("from")}
                  onBlur={formik.handleBlur("from")}
                >
                  <MenuItem value={"Colombo"}>Colombo</MenuItem>
                  <MenuItem value={"Kandy"}>Kandy</MenuItem>
                  <MenuItem value={"Panadura"}>Panadura</MenuItem>
                </Select>
              </FormControl>
              <div className="error ms-2 my-1">
                {formik.touched.from && formik.errors.from}
              </div>
            </div>
            <div className="form-outline d-flex flex-column mt-4">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="to"
                  value={formik.values.to}
                  label="To"
                  onChange={formik.handleChange("to")}
                  onBlur={formik.handleBlur("to")}
                >
                  <MenuItem value={"Colombo"}>Colombo</MenuItem>
                  <MenuItem value={"Kandy"}>Kandy</MenuItem>
                  <MenuItem value={"Panadura"}>Panadura</MenuItem>
                </Select>
              </FormControl>
              <div className="error">
                {formik.touched.to && formik.errors.to}
              </div>
            </div>
            <div className="booking_datepicker_container d-flex flex-column">
              <label>Departure Date</label>
              <input
                className="datepicker"
                type="date"
                name="departureDate"
                value={formik.values.departureDate}
                onChange={formik.handleChange("departureDate")}
                onBlur={formik.handleBlur("departureDate")}
              />
              <div className="error ms-2 my-1">
                {formik.touched.departureDate &&
                  formik.errors.departureDate}
              </div>
            </div>
          </div>
          <div className="booking_card_right_middle">
            <div className="form-outline d-flex flex-column mt-4">
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
            <div className="pt-4 ps-4">
              <FormControlLabel
                control={<Checkbox onChange={setDatePicker} />}
                label="Return"
              />
            </div>
            {showDatePicker === false ? (
              <div className="return_datepicker_container d-flex flex-column">
                <label>Return Date</label>
                <input
                  className="datepicker"
                  type="date"
                  placeholder="Return Date"
                  name="returnDate"
                  value={formik.values.returnDate}
                  onChange={formik.handleChange("returnDate")}
                  onBlur={formik.handleBlur("returnDate")}
                />
                <div className="error ms-2 my-1">
                  {formik.touched.returnDate && formik.errors.returnDate}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="booking_card_right_lower d-flex align-items-center justify-content-center">
            <div className="booking_card_right_lower_container">
              <Button
                style={{
                  color: "black",
                  borderColor: "black",
                  width: "200px",
                }}
                variant="outlined"
                type="submit"
              >
                Book
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Bookings