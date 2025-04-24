import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { Card, CardContent } from "./ui/card";

const volumeData = [
  { date: "Apr 1", volume: 21.6 },
  { date: "Apr 2", volume: 18.4 },
  { date: "Apr 3", volume: 22.1 },
  { date: "Apr 4", volume: 19.6 },
  { date: "Apr 5", volume: 20.3 },
  { date: "Apr 1", volume: 21.6 },
  { date: "Apr 2", volume: 18.4 },
  { date: "Apr 3", volume: 22.1 },
  { date: "Apr 4", volume: 19.6 },
  { date: "Apr 5", volume: 20.3 },
  { date: "Apr 1", volume: 21.6 },
  { date: "Apr 2", volume: 18.4 },
  { date: "Apr 3", volume: 22.1 },
  { date: "Apr 4", volume: 19.6 },
  { date: "Apr 5", volume: 20.3 },
  { date: "Apr 1", volume: 21.6 },
  { date: "Apr 2", volume: 18.4 },
  { date: "Apr 3", volume: 22.1 },
  { date: "Apr 4", volume: 19.6 },
  { date: "Apr 5", volume: 20.3 },
];

const VolumeTrendsSection = () => (
  <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
    <CardContent>
      <div className="text-xl mb-2">Volume Trends</div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={volumeData}
          margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
        >

          <Tooltip
            contentStyle={{ backgroundColor: "#1c1c22", border: "none" }}
            labelStyle={{ color: "#ccc" }}
            itemStyle={{ color: "#fff" }}
          />

          <Bar
            dataKey="volume"
            fill="#7157f9"
            barSize={20}
            radius={[100, 100, 100, 100]}
          >

            <LabelList
              dataKey="volume"
              position="top"
              formatter={(value) => `${(value / 1e6).toFixed(1)}M`}
              style={{ fill: "#fff", fontSize: 12 }}
            />


            <LabelList
              dataKey="date"
              position="bottom"
              style={{ fill: "#aaa", fontSize: 11 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default VolumeTrendsSection;
