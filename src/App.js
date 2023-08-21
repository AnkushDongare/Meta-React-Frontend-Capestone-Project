import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Header from "./components/Header";
import React from "react";
import logo from "./assets/Logo.svg";
import heroImage from "./assets/restauranfood.jpg";
import greekSalad from "./assets/greek salad.jpg";
import img1 from "./assets/Mario and Adrian A.jpg";
import img2 from "./assets/Mario and Adrian b.jpg";
import basket from "./assets/Basket.svg";
import footerLogo from "./assets/Logo.svg";

const App = () => {
  return (
    <>
      <Header logo={logo} />
      <main>
        <Hero heroImage={heroImage} />
        <Highlights greekSalad={greekSalad} />
        <Testimonials basket={basket} />
        <About img1={img1} img2={img2} />
      </main>
      <Footer footerLogo={footerLogo} />
    </>
  );
};

export default App;
