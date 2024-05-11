import React from "react";
import CardContainer from "../HeroCard/CardContainer";

function Hero() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="max-w-full"
        alt="hero"
        src="./src/assets/Components/Hero/Banner.svg"
      />
      <CardContainer />
    </div>
  );
}

export default Hero;
