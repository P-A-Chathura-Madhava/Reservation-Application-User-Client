import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Gallery from "./pages/Gallery";
import OurServices from "./pages/OurServices";
import History from "./pages/History";
import Contact from "./pages/Contact";
import TAndC from "./pages/TAndC";
import Footer from "./pages/Footer";
import Headroom from "react-headroom";

function App(props) {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Home />
      <Gallery />
      <History />
      <OurServices />
      <Contact />
      <TAndC />
      <Footer />
    </>
  );
}

export default App;
