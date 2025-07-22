// src/components/HeroSection.js
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/aiimage.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/interests"); // ✅ FIXED: Correct route path
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Shape Your Future with AI</h1>
        <p>Get personalized career roadmaps crafted by AI...</p>
        <button className="cta-button" onClick={handleClick}>
          Generate Your Roadmap
        </button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Career Illustration" />
      </div>
    </div>
  );
};

export default HeroSection;
