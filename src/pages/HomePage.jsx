import React from 'react'
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Highlights from "../components/Highlights";
import Hero from "../components/Hero";

const HomePage = ({heroImage, greekSalad, basket, img1, img2}) => {
  return (
    <>
      <main>
        <Hero heroImage={heroImage} />
        <Highlights greekSalad={greekSalad} />
        <Testimonials basket={basket} />
        <About img1={img1} img2={img2} />
      </main>
    </>
  )
}

export default HomePage
