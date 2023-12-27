import React from "react";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import OurServices from "../pages/OurServices";
import History from "../pages/History";
import Contact from "../pages/Contact";
import TAndC from "../pages/TAndC";
import Footer from "../pages/Footer";

const MainLayout = () => {
  return (
    <>
      <Home />
      <Gallery />
      <History />
      <OurServices />
      <Contact />
      {/* <TAndC /> */}
      <Footer />
    </>
  );
};

export default MainLayout;
