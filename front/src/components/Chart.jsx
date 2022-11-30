import React, { useEffect, useState } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([]);
  const getBookStatistics = async () => {
    const userToken = sessionStorage.getItem("userToken");
    try {
      const res = await axios.get(`/api/post/chart`, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      return res;
    } catch (err) {
      alert(
        `회원정보를 불러오지 못했습니다. 다시 시도해주세요. ${err.message}`,
      );
    }
  };
  useEffect(() => {
    getBookStatistics().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <BarChart width={600} height={350} data={data}>
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
