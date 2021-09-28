import React from "react";
import web from "../web.png";
import growth from "../growth.png";
import access from "../access.png";

export default function Services() {
  return (
    <div className="container">
      <div className="services-web">
        <img src={web} alt="Web Icon" className="img-fluid" />
        <div>
          <h3 className="h3">Web Design & Development</h3>
          <p>
            Share blog posts, products, or promotions with your customers. Use
            this text to describe products, share details on availability and
            style, or as a space to display recent reviews or FAQs.
        </p>
        </div>
      </div>

      <div className="services-growth">
        <div>
          <h3 className="h3">Growth Acceleration</h3>
          <p>
            Share blog posts, products, or promotions with your customers. Use
            this text to describe products, share details on availability and
            style, or as a space to display recent reviews or FAQs.
        </p>
        </div>
        <img src={growth} alt="growth Icon" className="img-fluid" />
      </div>

      <div className="services-access">
        <img src={access} alt="accessibilty Icon" className="img-fluid" />
        <div>
          <h3 className="h3">SEO & Accessibilty</h3>
          <p>
            Share blog posts, products, or promotions with your customers. Use
            this text to describe products, share details on availability and
            style, or as a space to display recent reviews or FAQs.
        </p>
        </div>
      </div>
    </div>
  );
}
