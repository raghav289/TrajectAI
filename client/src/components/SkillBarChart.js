// src/components/SkillBarChart.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", skills: 20 },
  { month: "Feb", skills: 40 },
  { month: "Mar", skills: 60 },
  { month: "Apr", skills: 50 },
  { month: "May", skills: 80 },
  { month: "Jun", skills: 70 },
];

const SkillBarChart = () => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="skills" fill="#6366F1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillBarChart;
