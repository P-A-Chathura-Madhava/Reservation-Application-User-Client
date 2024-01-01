import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  // Setting loggin details
  const authState = useSelector((state) => state?.auth?.user);

  const [active, setActive] = useState("toggleBar");
  const showNav = () => {
    setActive("toggleBar active");
  };
  const removeNav = () => {
    setActive("toggleBar");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
          >
            <div className="toggle_button"  /* onClick={showNav} */>
              <MenuIcon />
            </div>
          </IconButton>
          <Typography
            className="ctech_logo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleHome}
          >
            CTECH Railways
          </Typography>
          <div className="navbar_items_div">
            <ul
              className="navBarNormal"
              style={{ display: "flex", listStyle: "none" }}
            >
              <a href="#home">
                <li className="navBarNormalItem">Home</li>
              </a>
              <a href="#bookings">
                <li className="navBarNormalItem">Bookings</li>
              </a>
              <a href="#gallery">
                <li className="navBarNormalItem">Gallery</li>
              </a>
              <a href="#ourservices">
                <li className="navBarNormalItem">Our Services</li>
              </a>
              <a href="#contact">
                <li className="navBarNormalItem">Contact Us</li>
              </a>
              <a href="#tandc">
                <li className="navBarNormalItem">Terms and Conditions</li>
              </a>
            </ul>
          </div>
          <div className={active} style={{ position: "absolute", top: "10px" }}>
            <IoIosCloseCircle className="closeBtn" onClick={removeNav} />
            <ul className="toggleBarList" style={{ listStyle: "none" }}>
              <a className="togglebar_link" href="#home">
              <li className="toggleBarlItem" /* style={{ marginRight: "10px" }} */>
                Home
              </li>
              </a>
              <a className="togglebar_link" href="#bookings">
              <li className="toggleBarlItem" /* style={{ marginRight: "10px" }} */>
                Bookings
              </li>
              </a>
              <a className="togglebar_link" href="#gallery">
              <li className="toggleBarlItem" /* style={{ marginRight: "10px" }} */>
                Gallery
              </li>
              </a>
              <a className="togglebar_link" href="#ourservices">
              <li className="toggleBarlItem" /* style={{ marginRight: "10px" }} */>
                Our Services
              </li>
              </a>
              <a className="togglebar_link" href="#contact">
              <li className="toggleBarlItem" /* style={{ marginRight: "40px" }} */>
                Contact Us
              </li>
              </a>
            </ul>
          </div>
          {authState === null ? (
            <div>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Sign Up
              </Button>
            </div>
          ) : (
            <div>
              <span className="mx-4">Welcome {authState?.name}</span>
              <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
