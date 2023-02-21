import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import logo from "../styling/images/Home.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="surreal-estate-logo" />
      <ul className="navbar-links">
        <Link className="navbar-links-item" to="/add-property">
          Add Property
        </Link>
        <Link className="navbar-links-item" to="/">
          View Properties
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
