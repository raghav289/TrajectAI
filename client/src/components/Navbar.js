import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TrajectAI</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
         <div className="nav-item">Home</div>
          </Link>
        </li>
        <li>About</li>
        <li>
          <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
         <div className="nav-item">Dashboard</div>
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="nav-item">Login</div>
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="nav-item">Signup</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

