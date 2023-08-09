import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Highlights from "./Highlights";
import Hero from "./Hero";
import About from "./About";
import React from "react";
export default function Main() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
