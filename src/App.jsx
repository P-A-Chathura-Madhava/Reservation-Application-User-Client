import "./App.css";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerSignUp from "./pages/CustomerSignUp";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/signup" element={<CustomerSignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
