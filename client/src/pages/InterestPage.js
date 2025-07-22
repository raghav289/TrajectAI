// src/pages/InterestPage.js
import React, { useState } from "react";
import "./InterestPage.css";
import { useNavigate } from "react-router-dom";

const interestsList = [
  "Web Development", "Machine Learning", "Data Science",
  "Cybersecurity", "UI/UX Design", "Mobile Development",
  "Game Development", "Cloud Computing", "Blockchain",
  "Robotics", "Finance", "Marketing", "Product Management", "Entrepreneurship"
];

const InterestPage = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const navigate = useNavigate();

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleContinue = () => {
    if (selectedInterests.length < 3) {
      alert("Please select at least 3 areas of interest.");
      return;
    }
    navigate("/strengths");
  };

  return (
    <div className="interest-page">
      <h2 className="interest-title">Select Your Areas of Interest</h2>
      <p className="interest-subtext">
        Choose <strong>3 or more</strong> areas you're passionate about to help us personalize your roadmap.
      </p>

      <div className="step-indicator">
        <div className="step active">1</div>
        <span className="step-label active">Interests</span>
        <div className="step-divider" />
        <div className="step">2</div>
        <span className="step-label">Strengths</span>
        <div className="step-divider" />
        <div className="step">3</div>
        <span className="step-label">Career Goals</span>
      </div>

      <div className="interest-grid">
        {interestsList.map((interest) => (
          <button
            key={interest}
            className={`interest-button ${selectedInterests.includes(interest) ? "selected" : ""}`}
            onClick={() => toggleInterest(interest)}
          >
            {interest}
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

export default InterestPage;

