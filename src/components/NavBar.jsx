import React from "react";
import "../styling/navbar.css";
import logo from "../styling/images/Home.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="surreal-estate-logo" />
      <ul className="navbar-links">
        <a className="navbar-links-item" href="/">
          Add a Property
        </a>
        <a className="navbar-links-item" href="/">
          View Properties
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
