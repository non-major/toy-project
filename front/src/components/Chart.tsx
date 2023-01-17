import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";
import { getBookStatistics } from "../api/statistics";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBookStatistics().then((data) => setData(data));
  }, []);

  return (
    <div>
      <BarChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" unit="월" />
        <YAxis unit="권" domain={[0, 10]} tickCount={8} />
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
