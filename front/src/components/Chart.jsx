import React from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";

const Chart = () => {
  const data = [
    {
      month: "6",
      amt: 6,
    },
    {
      month: "7",
      amt: 10,
    },
    {
      month: "8",
      amt: 5,
    },
    {
      month: "9",
      amt: 3,
    },
    {
      month: "10",
      amt: 3,
    },
    {
      month: "11",
      amt: 1,
    },
  ];

  return (
    <div>
      <BarChart width={500} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" unit="월" />
        <YAxis unit="권" />
        <Bar
          dataKey="amt"
          fill="#5e92f3"
          label={{ value: "amt", position: "top" }}
        />
      </BarChart>
    </div>
  );
};

export default Chart;
