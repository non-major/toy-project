import React from "react";
import { useQuery } from "react-query";
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip } from "recharts";
import { getBookStatistics } from "../../api/statistics";
import MyButton from "../MyButton";
import { EmptyChart, EmptyNewLink, EmptyText } from "./Chart.styles";

interface MonthCount {
  month: string;
  count: number;
}

const month: string[] = [];
for (let i = 1; i <= 12; i++) {
  month.push(i.toString());
}

const emptyData = month.map((item) => {
  return {
    month: item,
    count: 0,
  };
});

const Chart = () => {
  const { data: postCount } = useQuery("contentsCount", () =>
    getBookStatistics(),
  );
  let monthCount = 0;
  const monthData = month.map((item) => {
    postCount?.forEach((i: MonthCount) => {
      if (Number(i.month.split("-")[1]) === Number(item)) {
        monthCount = Number(i.count);
      } else {
        monthCount = 0;
      }
    });
    return {
      month: item,
      count: monthCount,
    };
  });

  return (
    <div>
      {postCount?.length !== 0 ? (
        <BarChart
          width={600}
          height={350}
          data={monthData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" unit="월" interval={0} ticks={month} />
          <YAxis
            unit="권"
            type="number"
            tickCount={10}
            domain={[0, "dataMax+5"]}
            allowDecimals={false}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#5e92f3"
            label={{ value: "count", position: "top", fill: "#5e92f3" }}
          />
        </BarChart>
      ) : (
        <EmptyChart>
          <BarChart
            width={600}
            height={350}
            data={emptyData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" unit="월" interval={0} ticks={month} />
            <YAxis
              unit="권"
              type="number"
              tickCount={10}
              domain={[0, "dataMax+5"]}
              allowDecimals={false}
            />
            <Bar
              dataKey="count"
              fill="gray"
              label={{ value: "count", position: "top", fill: "gray" }}
            />
          </BarChart>
          <EmptyText>
            <div>등록된 게시글이 없어요😵</div>
            <EmptyNewLink to={"/new"}>
              <MyButton type="button" btntype="submit">
                {"새 기록 쓰러가기 >"}
              </MyButton>
            </EmptyNewLink>
          </EmptyText>
        </EmptyChart>
      )}
    </div>
  );
};

export default Chart;
