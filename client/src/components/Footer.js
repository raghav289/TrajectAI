import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">TrajectAI</h2>

        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/contact">Contact</a>
        </nav>

        <p className="footer-tagline">
          "Your AI-powered career path advisor"
        </p>

        <p className="footer-copy">
          © 2025 TrajectAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
