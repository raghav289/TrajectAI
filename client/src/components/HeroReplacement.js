import React from "react";
import "./HeroReplacement.css";
import heroIllustration from "../assets/businesswomen.jpg"; // Use the same image

const HeroReplacement = () => {
  return (
    <section className="hero-replace-section">
      <div className="hero-replace-container">
        <div className="hero-replace-text">
          <h1>💡Define Your Career Goal</h1>
          <p>Well-defined career goals give you clarity and direction in your professional journey.</p>
        </div>
        <div className="hero-replace-image">
          <img src={heroIllustration} alt="Career Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroReplacement;