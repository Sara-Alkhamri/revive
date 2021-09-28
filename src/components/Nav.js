import React from "react";
import logo from "../revive (20).png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-container navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="revive logo" className="img-fluid" style={{ width: '15rem' }} />
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/services" className="nav-link">
            What We Do
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Who We Are
          </Link>
        </li>
      </ul>
    </div>
  );
}
