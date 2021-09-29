import React from "react";
import hero from "../hero-image2.png";
import Services from "./Services"
import Clients from "../pages/clients"

export default function Hero() {
  return (
    <div className="">
      {/* <h1>Bring Your Ideas to Life</h1> */}
      <div className="hero-container">
        <div className="hero-div">
          <h3 className="text-center">Web Design and e-commerce Studio</h3>
          <p>
            We’ve created a wide variety of online experiences. Whether it’s an
            e-commerce store with Shopify or Wordpress, an informational website
            or mini-site/landing page, lead generator or other custom web apps to
            help your business processes automate tasks, we've been there - from
            start to finish. We'll create a strategy to best target your audience,
            to reach them and to achieve your goals.
        </p>
        </div>

        <img src={hero} alt="hero image" className="img-fluid" />
      </div>
      <div>
        <Services />
        <Clients />
      </div>
    </div>
  );
}
