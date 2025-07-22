// src/pages/CareerGoalPage.js
import React, { useState } from "react";
import "./CareerGoalPage.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // ✅ Using your custom hook

const CareerGoalPage = () => {
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const {
    interests,
    strengths,
    setCareerGoal,
    setRoadmap,
  } = useUser();

  const handleGenerate = async () => {
    if (!goal.trim()) {
      alert("Please enter a career goal.");
      return;
    }
    setCareerGoal(goal);
    console.log("⏳ Generating Roadmap for goal:", goal);

    const payload = {
      interests,
      strengths,
      goal,
    };

    console.log("📦 Payload going to backend:", payload);

    try {
      const response = await fetch("http://localhost:5000/api/roadmap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("📥 Response from backend:", data);

      if (data.error) {
        console.error("❌ Backend Error:", data.error);
        alert(`Error: ${data.error}`);
        return;
      }

      setRoadmap(data.roadmap);
      navigate("/roadmap");
    } catch (error) {
      console.error("💥 Fetch failed:", error);
      alert("Failed to generate roadmap. Try again later.");
    }
  };

  return (
    <div className="career-goal-page">
      <h2 className="goal-title">Define Your Career Goal</h2>
      <p className="goal-subtext">This helps us generate a roadmap tailored just for you.</p>

      <div className="step-indicator">
        <div className="step completed">1</div>
        <span className="step-label">Interests</span>
        <div className="step-divider" />
        <div className="step completed">2</div>
        <span className="step-label">Strengths</span>
        <div className="step-divider" />
        <div className="step active">3</div>
        <span className="step-label active">Career Goal</span>
      </div>

      <div className="goal-input-section">
        <input
          type="text"
          placeholder="e.g., Software Engineer at Google"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate Roadmap</button>
      </div>
    </div>
  );
};

export default CareerGoalPage;
