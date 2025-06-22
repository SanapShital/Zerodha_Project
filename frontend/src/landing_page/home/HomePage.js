import React from "react";
import Stats from "./Stats";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import OpenAccount from "../../OpenAccount";
import Education from "./Education";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
