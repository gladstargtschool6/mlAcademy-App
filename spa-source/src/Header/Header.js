import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light navbar-static-top bg-primary ">
    <a href="/" className="navbar-brand">
      <img src={logo} alt="logo" height="24px" />
    </a>
    <div className="navbar-collapse collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Explore
          </a>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">
            Labs
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
