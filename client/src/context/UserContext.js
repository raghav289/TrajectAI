// src/context/UserContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [interests, setInterests] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [careerGoal, setCareerGoal] = useState("");
  const [roadmap, setRoadmap] = useState("");

  return (
    <UserContext.Provider
      value={{
        interests,
        setInterests,
        strengths,
        setStrengths,
        careerGoal,
        setCareerGoal,
        roadmap,
        setRoadmap,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => useContext(UserContext);
