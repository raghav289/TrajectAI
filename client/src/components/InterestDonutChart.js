import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Machine Learning", value: 30 },
  { name: "Web Development", value: 45 },
  { name: "Data Analysis", value: 25 },
];

const COLORS = ["#8e44ad", "#3498db", "#2ecc71"];

const InterestDonutChart = () => {
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
    </PieChart>
  );
};

export default InterestDonutChart;
