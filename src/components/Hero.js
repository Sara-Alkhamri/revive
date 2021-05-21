import React from "react";
import hero from "../hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Bring Your Ideas to Life</h1>
      <h3>A Long Beach, CA Web Design and e-commerce Studio</h3>
      <img src={hero} alt="hero image" />
    </div>
  );
}
