import React from "react";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Highlights from "../components/Highlights";
import Hero from "../components/Hero";

const HomePage = ({
  heroImage,
  greekSalad,
  bruchetta,
  lemonDessert,
  basket,
  img1,
  img2,
}) => {
  return (
    <>
      <main>
        <Hero heroImage={heroImage} />
        <Highlights
          lemonDessert={lemonDessert}
          bruchetta={bruchetta}
          greekSalad={greekSalad}
        />
        <Testimonials basket={basket} />
        <About img1={img1} img2={img2} />
      </main>
    </>
  );
};

export default HomePage;
