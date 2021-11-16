import React from "react";
import logo from "../revive (20).png";
import { Link, Route, Switch } from "react-router-dom";
import Contcat from "./Contact"

export default function Nav() {
  return (
    <div className="nav-container navbar-expand-sm navbar-dark px-sm-5">

      <Link to="/">
        <img src={logo} alt="revive logo" className="img-fluid" style={{ width: '15rem' }} />
      </Link>
      {/* <ul className="nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            Who We Are
          </Link>
        </li>
        <li className="nav-item">

          <Link to="/contact" className="nav-link">
            Contact us
          </Link>

        </li>
      </ul> */}
    </div>
  );
}
