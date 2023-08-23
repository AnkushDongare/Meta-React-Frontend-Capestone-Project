import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import logo from "./assets/Logo.svg";
import footerLogo from "./assets/Logo.svg";
import HomePage from "./pages/HomePage";
import heroImage from "./assets/restauranfood.jpg";
import greekSalad from "./assets/greek salad.jpg";
import img1 from "./assets/Mario and Adrian A.jpg";
import img2 from "./assets/Mario and Adrian b.jpg";
import basket from "./assets/Basket.svg";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from './pages/ConfirmedBooking.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              heroImage={heroImage}
              greekSalad={greekSalad}
              basket={basket}
              img1={img1}
              img2={img2}
            />
          }
        />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/confirmed" element={<ConfirmedBooking/>} />
      </Routes>
      <Footer footerLogo={footerLogo} />
    </BrowserRouter>
  );
};

export default App;
