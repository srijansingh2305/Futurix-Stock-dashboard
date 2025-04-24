
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "./ui/card";
import { ArrowUpRight } from "lucide-react";

const lineData = [
  { date: "Apr 1", price: 89.5 },
  { date: "Apr 2", price: 70.2 },
  { date: "Apr 3", price: 96.96 },
  { date: "Apr 4", price: 85.4 },
  { date: "Apr 5", price: 92.9 },
  { date: "Apr 6", price: 89.5 },
  { date: "Apr 7", price: 70.2 },
  { date: "Apr 8", price: 96.96 },
  { date: "Apr 9", price: 85.4 },
  { date: "Apr 10", price: 92.9 },
  { date: "Apr 11", price: 89.5 },
  { date: "Apr 12", price: 70.2 },
  { date: "Apr 13", price: 96.96 },
  { date: "Apr 14", price: 85.4 },
  { date: "Apr 15", price: 92.9 },
  { date: "Apr 16", price: 89.5 },
  { date: "Apr 17", price: 70.2 },
  { date: "Apr 18", price: 96.96 },
  { date: "Apr 19", price: 85.4 },
  { date: "Apr 20", price: 92.9 },
];

const StatItem = ({ label, value, sublabel, color }) => (
  <div className="text-sm space-y-1">
    <div className="font-semibold text-white">{label}</div>
    <div className={`text-lg font-bold ${color}`}>{value}</div>
    <div className="text-xs text-gray-400">{sublabel}</div>
  </div>
);

const RangeIndicator = ({ title, low, high, current }) => {
  const percentage = ((current - low) / (high - low)) * 100;
  return (
    <div className="text-sm space-y-1">
      <div className="font-semibold text-white">{title}</div>
      <div className="w-full bg-gray-700 h-1 rounded relative">
        <div
          className="absolute top-0 h-1 bg-green-500 rounded"
          style={{ left: `${percentage}%`, width: "2px" }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{low}</span>
        <span>{high}</span>
      </div>
    </div>
  );
};

export default function TopSection() {
  return (
    <Card className="bg-[#1c1c22] p-6 rounded-2xl shadow-lg text-white space-y-6">
      <CardContent className="space-y-6">

        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Logo"
              className="w-10 h-10"
            />
            <div>
              <div className="text-xl font-semibold">
                AAPL <span className="text-gray-400 font-normal">Apple Inc.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">$25,901</div>
                <div className="text-green-500 flex items-center text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  0.27%
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400">28 January, 4:00pm EST | Market Open</div>
          <div className="text-sm text-gray-300">
            Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 & 1,438.75. Cipla has given -4.55% in this year & -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sect&nbsp;...
            <span className="underline font-semibold cursor-pointer"> see more</span>
          </div>
        </div>

        // Chart & Stats Side by Side
<div className="flex flex-col md:flex-row gap-6">

  <div className="w-full md:w-1/2 h-56">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
        <XAxis dataKey="date" stroke="#999" />
        <YAxis stroke="#999" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1c1c22",
            border: "none",
          }}
          formatter={(value) => [`$${value}`, "Price"]}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#00C49F"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6, strokeWidth: 2, stroke: "#fff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>


  <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">

    <div className="grid grid-cols-2 gap-4">
      <StatItem label="Dividend Yield" value="0.89" sublabel="Lower than Industry" color="text-red-400" />
      <StatItem label="Beta" value="0.41" sublabel="Low Volatility" color="text-green-400" />
      <StatItem label="Debt To Equity" value="0.41" sublabel="Low Volatility" color="text-green-400" />
      <StatItem label="Beta" value="0.41" sublabel="Low Volatility" color="text-green-400" />
    </div>

    <div className="space-y-4">
      <RangeIndicator title="Day Range" low={1438.75} high={1482.20} current={1448} />
      <RangeIndicator title="52 Week Range" low={1388.75} high={1588.75} current={1448} />
    </div>
  </div>
</div>


      </CardContent>
    </Card>
  );
}
