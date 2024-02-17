import React from "react";
import HeroSection from "./HeroSection";
import SaidBar from "./SaidBar";

function Hero() {
  return <div className="container mx-auto md:flex md:flex-row md:divide-x">
    <SaidBar />
    <HeroSection />
  </div>;
}

export default Hero;
