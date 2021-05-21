import React from "react";
import logo from "../Revive.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="revive logo" className="img-fluid" />
      </Link>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Who We Are
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            What We Do
          </Link>
        </li>
      </ul>
    </div>
  );
}
