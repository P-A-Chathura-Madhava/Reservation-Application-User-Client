import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const rows = ["Technical issue", "Payment issue", "Support case"];

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Us</h2>
      <form action="">
      <div className="contact_container">
        <div className="contact_upper">
        <TextField
        className="contact_textfield"
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
                className="contact_textfield"
          required
          id="outlined-required"
          label="Email"
        />
        </div>
        <div className="contact_middle">
        <TextField
                className="contact_textfield"
          required
          id="outlined-required"
          label="Mobile"
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={rows}
          sx={{ width: "50%" }}
          renderInput={(params) => <TextField {...params} label="Subject" />}
        />
        </div>
        <div className="contact_lower">
        <TextField
        className="contact_textarea"
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
        </div>
        <div className="button_div">
        <button className="btn btn-outline-dark contact_btn" type="button">
          Send
        </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Contact;
