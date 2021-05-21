import React from "react";
import logo from "../Revive.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <img src={logo} alt="revive logo" id="logo" />
        </Link>

        <li>
          <Link to="/about" className="nav-link">
            Who We Are
          </Link>
          <Link to="/services" className="nav-link">
            What We Do
          </Link>
        </li>
      </ul>
    </div>
  );
}
