import React from "react";
import web from "../web-icon.png";
import eComm from "../ecomm-icon.png";
import access from "../access.png";

export default function Services() {
  return (
    <div className="services-container">
      <h1 style={{ 'color': '' }}>-the Services</h1>
      <div className="services-web">
        <div>
          <img src={web} alt="Web Icon" className="img-fluid" />
          <h3 className="h3" style={{ color: '' }}>Web Design & Development</h3>
          <p>
            Share blog posts, products, or promotions with your customers. Use
            this text to describe products, share details on availability and
            style, or as a space to display recent reviews or FAQs.
        </p>
        </div>
      </div>

      <div className="services-growth">
        <div>
          <img src={eComm} alt="growth Icon" className="img-fluid" />
          <h3 className="h3">E-commerce Solutions</h3>
          <p>
            Share blog posts, products, or promotions with your customers. Use
            this text to describe products, share details on availability and
            style, or as a space to display recent reviews or FAQs.
        </p>
        </div>
      </div>

      <div className="services-access">
        <div>
          <img src={access} alt="accessibilty Icon" className="img-fluid" />
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
