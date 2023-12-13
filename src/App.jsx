import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Gallery from './pages/Gallery';
import OurServices from './pages/OurServices';
import History from './pages/History';
import Contact from './pages/Contact';
import TAndC from './pages/TAndC';
import Footer from './pages/Footer';

function App(props) {
  return (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <History />
      <OurServices />
      <div style={{height: "200px"}}></div>
      {/* <Contact />
      <Footer />
      <TAndC /> */}
    </>
  );
}

export default App;
