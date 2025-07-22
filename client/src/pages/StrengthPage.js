import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import "./StrengthPage.css";

const strengthsList = [
  "Problem Solving",
  "Creativity",
  "Communication",
  "Teamwork",
  "Leadership",
  "Critical Thinking",
  "Adaptability",
  "Time Management",
  "Technical Knowledge",
];

const StrengthPage = () => {
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const navigate = useNavigate(); // ✅ Hook for navigation

  const toggleStrength = (strength) => {
    if (selectedStrengths.includes(strength)) {
      setSelectedStrengths(selectedStrengths.filter((item) => item !== strength));
    } else {
      setSelectedStrengths([...selectedStrengths, strength]);
    }
  };

  const handleContinue = () => {
    if (selectedStrengths.length < 2) {
      alert("Please select at least 2 strengths.");
      return;
    }

    console.log("Selected Strengths:", selectedStrengths);

    // ✅ Navigate to Career Goal page
    navigate("/career-goal");
  };

  return (
    <div className="strength-page">
      <h2 className="strength-title">Select Your Strengths</h2>
      <p className="strength-subtext">Choose at least 2 qualities that define you best.</p>

      {/* Step Indicator */}
      <div className="step-indicator">
        <div className="step completed">1</div>
        <span className="step-label completed">Interests</span>
        <div className="step-divider" />
        <div className="step active">2</div>
        <span className="step-label active">Strengths</span>
        <div className="step-divider" />
        <div className="step">3</div>
        <span className="step-label">Career Goals</span>
      </div>

      <div className="strength-grid">
        {strengthsList.map((strength) => (
          <button
            key={strength}
            className={`strength-button ${selectedStrengths.includes(strength) ? "selected" : ""}`}
            onClick={() => toggleStrength(strength)}
          >
            {strength}
          </button>
        ))}
      </div>

      <div className="continue-button-wrapper">
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StrengthPage;
