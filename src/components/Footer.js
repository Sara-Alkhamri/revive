import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">Who We Are</Link>
        <Link to="/services">What We Do</Link>
      </div>
      <p className="footer-p">© Revive Labs, LLC. all rights reserved</p>
    </div>
  );
}
