"use client";

import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    Total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const HomeBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} tickFormatter={(value) => `$${value}`} />
        <Tooltip />
        <Bar
          dataKey="Total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-amber-400"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HomeBarChart;
