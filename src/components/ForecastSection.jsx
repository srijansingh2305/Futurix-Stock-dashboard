import React from "react";

import { Card, CardContent } from "./ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ComposedChart
} from "recharts";



const ForecastSection = () => {
  const analystEstimatesData = [
    { name: "Strong Buy", value: 40, color: "#34D399" },
    { name: "Buy", value: 25, color: "#A7F3D0" },
    { name: "Hold", value: 15, color: "#E5E7EB" },
    { name: "Sell", value: 10, color: "#FCA5A5" },
    { name: "Strong Sell", value: 10, color: "#F87171" },
  ];

  const recommendationTrendData = [
    { day: "M", strongBuy: 10, buy: 8, hold: 5, sell: 6, strongSell: 4 },
    { day: "T", strongBuy: 12, buy: 10, hold: 6, sell: 3, strongSell: 2 },
    { day: "W", strongBuy: 5, buy: 6, hold: 4, sell: 10, strongSell: 8 },
    { day: "T", strongBuy: 15, buy: 12, hold: 3, sell: 2, strongSell: 1 },
    { day: "F", strongBuy: 13, buy: 10, hold: 5, sell: 3, strongSell: 2 }
  ];

  return (
    
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <CardContent>
          <div className="text-md font-semibold mb-4">Analyst Estimates</div>


          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            

            <div className="w-full md:w-1/2">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={analystEstimatesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                  >
                    {analystEstimatesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

          

            <div className="w-full md:w-1/2 space-y-2 text-sm">
              {analystEstimatesData.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </CardContent>
      </Card>


      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <CardContent>
          <div className="text-md font-semibold mb-2">Recommendation Trend</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={recommendationTrendData} stackOffset="sign">
              <XAxis dataKey="day" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
              <Bar dataKey="strongBuy" stackId="a" fill="#34D399" />
              <Bar dataKey="buy" stackId="a" fill="#A7F3D0" />
              <Bar dataKey="hold" stackId="a" fill="#E5E7EB" />
              <Bar dataKey="sell" stackId="a" fill="#FCA5A5" />
              <Bar dataKey="strongSell" stackId="a" fill="#F87171" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>


      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <CardContent>
          <div className="text-md font-semibold mb-2">Share Price Forecast</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[
              { date: "Jan", price: 1450 },
              { date: "Feb", price: 1480 },
              { date: "Mar", price: 1400 },
              { date: "Apr", price: 1520 },
              { date: "May", price: 1490 },
              { date: "Jun", price: 1550 },
            ]}>
              <XAxis dataKey="date" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
              <Line type="monotone" dataKey="price" stroke="#4ADE80" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>


      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <CardContent>
          <div className="text-md font-semibold mb-2">Financials Forecast</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={[
              { year: "Mar 2023", actual: 12.4, estimate: 11.5 },
              { year: "Mar 2024", actual: 13.8, estimate: 12.5 },
              { year: "Mar 2025", actual: 15.0, estimate: 14.2 },
              { year: "Mar 2026", actual: 16.1, estimate: 15.0 },
            ]}>
              <XAxis dataKey="year" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
              <Line type="monotone" dataKey="actual" stroke="#4ADE80" strokeWidth={2} />
              <Line type="monotone" dataKey="estimate" stroke="#FBBF24" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>


      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <CardContent>
          <div className="text-md font-semibold mb-2">Hits & Misses</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-300">
              <thead className="border-b border-gray-600 text-gray-400">
                <tr>
                  <th className="py-2 px-4">Quarter</th>
                  <th className="py-2 px-4">Actual</th>
                  <th className="py-2 px-4">Estimates</th>
                  <th className="py-2 px-4">Surprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { quarter: "Dec 2024", actual: 10.43, estimates: 9.43 },
                  { quarter: "Sep 2024", actual: 9.2, estimates: 9.1 },
                  { quarter: "Jun 2024", actual: 8.7, estimates: 9.0 },
                  { quarter: "Mar 2024", actual: 10.1, estimates: 9.6 },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-700">
                    <td className="py-2 px-4">{item.quarter}</td>
                    <td className="py-2 px-4">{item.actual}</td>
                    <td className="py-2 px-4">{item.estimates}</td>
                    <td className="py-2 px-4 text-green-400">{(item.actual - item.estimates).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg col-span-full">
        <CardContent>
          <div className="text-md font-semibold mb-2">Technical Analysis</div>
          <ResponsiveContainer width="100%" height={250}>
            <ComposedChart data={[
              { time: "10:00", open: 52, close: 54 },
              { time: "11:00", open: 54, close: 53 },
              { time: "12:00", open: 53, close: 56 },
              { time: "13:00", open: 56, close: 55 },
              { time: "14:00", open: 55, close: 58 },
              { time: "10:00", open: 52, close: 54 },
              { time: "11:00", open: 54, close: 53 },
              { time: "12:00", open: 53, close: 56 },
              { time: "13:00", open: 56, close: 55 },
              { time: "14:00", open: 55, close: 58 },
              { time: "10:00", open: 52, close: 54 },
              { time: "11:00", open: 54, close: 53 },
              { time: "12:00", open: 53, close: 56 },
              { time: "13:00", open: 56, close: 55 },
              { time: "14:00", open: 55, close: 58 },
              { time: "10:00", open: 52, close: 54 },
              { time: "11:00", open: 54, close: 53 },
              { time: "12:00", open: 53, close: 56 },
              { time: "13:00", open: 56, close: 55 },
              { time: "14:00", open: 55, close: 58 },
            ]}>
              <XAxis dataKey="time" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
              <Bar dataKey= "close" fill="#34D399" />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastSection;
