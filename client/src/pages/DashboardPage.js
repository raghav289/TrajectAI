// src/pages/DashboardPage.js
import React from "react";
import "./DashboardPage.css";
import InterestDonutChart from "../components/InterestDonutChart";
import SkillBarChart from "../components/SkillBarChart"; // ✅ Added import

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="welcome-text">Welcome back, Raghav 👋</h1>

      {/* Top Cards */}
      <div className="top-cards">
        <div className="card">
          <h4>Roadmaps</h4>
          <p>Generated</p>
        </div>
        <div className="card">
          <h4>Career Goal</h4>
          <p>Software Engineer</p>
        </div>
        <div className="card">
          <h4>Roadmap Progress</h4>
          <p>45%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="chart-section">
        <div className="chart interests-chart">
          <h3>Interests</h3>
          <InterestDonutChart />
        </div>

        <div className="chart skills-chart">
          <h3>Skill Focus by Month</h3>
          <SkillBarChart /> {/* ✅ Replaced static image */}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <span className="tab active">Saved Roadmaps</span>
        <span className="tab">Edit Preferences</span>
        <span className="tab">Resume Analysis</span>
      </div>

      {/* Roadmap Card */}
      <div className="roadmap-card">
        <h4>Software Engineer Roadmap</h4>
        <p>Generated on April 10, 2024</p>
      </div>
    </div>
  );
};

export default DashboardPage;
