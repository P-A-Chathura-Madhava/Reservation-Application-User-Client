import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import img1 from "../images/image-01.jpg";
import img2 from "../images/image-02.jpg";
import img3 from "../images/image-03.jpg";
import img4 from "../images/image-04.jpg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

// const theme = createTheme({
//   palette: {
//     blackColor: createColor('#000000')
//   },
// });

const rows = ["Colombo", "Horana", "Panadura", "Kandy"];

const Home = () => {
  const [showDatePicker, setShowDatePicker] = useState(true);

  const [startDate, setStartDate] = useState(new Date());

  const setDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div id="home" className="home_carausal_container">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="home_carousal_overlay">
        <h2 className="home_carousal_overlay_text">
          Welcome to Sri Lanka Railways
        </h2>
        <h5 className="home_carousal_overlay_text">
          Online Advance Train Seats Reservation
        </h5>
        <button className="home_carousal_overlay_button">Book Your Seat</button>
      </div>
      <div id="bookings" className="bookingCard">
        <div className="booking_card_left">
          <h2 className="booking_card_title">Book Your Seat</h2>
          <p className="booking_card_subtitle">You can book both ways</p>
        </div>
        <div className="booking_card_right">
          <div className="booking_card_container">
            <div className="booking_card_right_upper">
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={rows}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="From" />}
              />
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={rows}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="To" />}
              />
              <div className="booking_datepicker_container">
                <DatePicker
                  className="booking_datepicker"
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="booking_card_right_middle">
              <div className="form-outline">
                <TextField
                  id="outlined-number"
                  label="Number of Passengers"
                  size="small"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <FormControlLabel
                control={<Checkbox onChange={setDatePicker} />}
                label="Return"
              />
              {showDatePicker === false ? (
                <div className="return_datepicker_container">
                  <DatePicker
                    className="return_datepicker"
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="booking_card_right_lower">
              <div className="booking_card_right_lower_container">
                <Button
                component={Link}
                to="/checkout"
                  style={{ color: "black", borderColor: "black" }}
                  variant="outlined"
                >
                  Book
                </Button>
                <Button
                  style={{ color: "black", borderColor: "black" }}
                  variant="outlined"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
