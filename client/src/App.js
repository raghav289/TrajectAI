// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroReplacement from "./components/HeroReplacement";
import Footer from "./components/Footer";
import InterestPage from "./pages/InterestPage";
import StrengthPage from "./pages/StrengthPage";
import CareerGoalPage from "./pages/CareerGoalPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import RoadmapPage from "./pages/RoadmapPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HeroReplacement />
            </>
          }
        />
        <Route path="/interests" element={<InterestPage />} />
        <Route path="/strengths" element={<StrengthPage />} />
        <Route path="/career-goal" element={<CareerGoalPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
