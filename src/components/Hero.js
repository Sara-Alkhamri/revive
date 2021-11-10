import React from "react";
import hero from "../hero-img1.png";
import heroBackground from "../hero-background.png"
import Services from "./Services"
import Clients from "../pages/clients"
import Process from "./Process"
import './Hero.css'

export default function Hero(props) {
  const clients = [
    { id: '1', name: 'Barerra' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Amabelly' },
    { id: '4', name: 'Sam' },
    { id: '5', name: 'April' }


  ]

  return (
    <div className="container">
      {/* <h1>Bring Your Ideas to Life</h1> */}
      {/* {props.title} */}

      <div className="hero-container">
        <h1 className="main-h1">A Long Beach Web Design and e-commerce Studio</h1>

        {/* <img src={heroBackground} alt="hero background" /> */}

        {/* <div className="hero-div">
          <div className="col-6">
            <h2>Here to help your business<br></br>stand out from the crowd</h2>

          </div>
          <p>
            We’ve created a wide variety of online experiences. Whether it’s an
            e-commerce store with Shopify or Wordpress, an informational website
            or mini-site/landing page, lead generator or other custom web apps to
            help your business processes automate tasks, we've been there - from
            start to finish. We'll create a strategy to best target your audience,
            to reach them and to achieve your goals.
        </p>
        </div> */}


        {/* bubble effect */}
        {/* <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div> */}

        {/* <div className="">
          <img src={hero} alt="hero image" className="img-fluid" />
        </div> */}
      </div>
      {/* <button type="button" class="btn btn-lg col-2">Free Quote</button> */}

      <div>

        {/* <Services />
        <Process />
        <Clients /> */}
        {/* <ul>
          {clients.map((client) => (
            <Clients key={client.id} name={client.name} />
          ))}
        </ul> */}
      </div>
    </div>

  );
}
