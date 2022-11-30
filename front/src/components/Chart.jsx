import React, { useEffect } from "react";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar } from "recharts";
import axios from "axios";

const Chart = () => {
  const getBookStatistics = async () => {
    const userToken = sessionStorage.getItem("userToken");
    try {
      const Books = await axios.get(`/api/mypage`, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      return Books;
    } catch (err) {
      alert(
        `회원정보를 불러오지 못했습니다. 다시 시도해주세요. ${err.message}`,
      );
    }
  };
  useEffect(() => {
    getBookStatistics().then((Books) => {
      console.log(Books);
    });
  }, []);

  const data = [
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
      amt: 5,
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
