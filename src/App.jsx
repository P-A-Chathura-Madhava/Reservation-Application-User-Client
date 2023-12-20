import "./App.css";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
