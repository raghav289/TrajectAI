import React, { useState } from "react";
import axios from "axios";

const CareerForm = () => {
  const [userGoal, setUserGoal] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!userGoal.trim()) {
      alert("Please enter your career goal!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/generate", {
        userGoal,
      });

      setRoadmap(response.data.roadmap);
    } catch (error) {
      console.error("Error generating roadmap:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Enter Your Career Goal</h2>
      <input
        type="text"
        value={userGoal}
        onChange={(e) => setUserGoal(e.target.value)}
        placeholder="e.g., Become a Software Engineer at Google"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Roadmap"}
      </button>

      {roadmap && (
        <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
          <h3>Your Roadmap:</h3>
          <p>{roadmap}</p>
        </div>
      )}
    </div>
  );
};

export default CareerForm;
