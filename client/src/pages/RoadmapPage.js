// src/pages/RoadmapPage.js
import React from "react";
import { useUser } from "../context/UserContext";
import "./RoadmapPage.css"; // optional CSS file if you want to style it

const RoadmapPage = () => {
  const { roadmap, careerGoal } = useUser();

  return (
    <div className="roadmap-page">
      <h2>Career Roadmap for: {careerGoal}</h2>

      {roadmap ? (
        <pre className="roadmap-output">
          {roadmap}
        </pre>
      ) : (
        <p>No roadmap found. Please try again.</p>
      )}
    </div>
  );
};

export default RoadmapPage;