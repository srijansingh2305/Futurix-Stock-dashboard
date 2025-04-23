import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "./ui/card";

const volumeData = [
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
        <BarChart data={volumeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="date" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
          <Bar dataKey="volume" fill="#7157f9" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default VolumeTrendsSection;
