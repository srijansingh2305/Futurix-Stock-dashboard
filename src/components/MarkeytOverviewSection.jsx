"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LabelList,
} from "recharts";

export default function MarketOverviewSection() {

  const volumeData = [
    { time: "10:55PM", st1: 3000, st2: 2800, st3: 2500 },
    { time: "11:55PM", st1: 3200, st2: 3000, st3: 2700 },
    { time: "12:59AM", st1: 4000, st2: 3500, st3: 3300 },
    { time: "1:59AM", st1: 4300, st2: 3900, st3: 3600 },
    { time: "2:59AM", st1: 4800, st2: 4400, st3: 4000 },
    { time: "3:59AM", st1: 5200, st2: 4800, st3: 4400 },
    { time: "4:59AM", st1: 5500, st2: 5100, st3: 4700 },
    { time: "5:59AM", st1: 5800, st2: 5300, st3: 5000 },
    { time: "6:59AM", st1: 6000, st2: 5600, st3: 5200 },
    { time: "7:59AM", st1: 6200, st2: 5800, st3: 5400 },
  ];

  const donutData = [
    { name: "C1", value: 30 },
    { name: "C2", value: 25 },
    { name: "C3", value: 20 },
    { name: "C4", value: 15 },
    { name: "C5", value: 10 },
  ];
  const COLORS = ["#00f2ff", "#01c38d", "#7157f9", "#3333ff", "#00aaff"];

  const shareholdingTabs = {
    FII: [
      { date: "Mar 2021", value: 45 },
      { date: "Mar 2022", value: 70 },
      { date: "Mar 2023", value: 50 },
      { date: "Mar 2024", value: 60 },
    ],
    MF: [
      { date: "Mar 2021", value: 35 },
      { date: "Mar 2022", value: 40 },
      { date: "Mar 2023", value: 30 },
      { date: "Mar 2024", value: 45 },
    ],
    Promoter: [
      { date: "Mar 2021", value: 60 },
      { date: "Mar 2022", value: 65 },
      { date: "Mar 2023", value: 55 },
      { date: "Mar 2024", value: 70 },
    ],
    Other: [
      { date: "Mar 2021", value: 20 },
      { date: "Mar 2022", value: 25 },
      { date: "Mar 2023", value: 15 },
      { date: "Mar 2024", value: 30 },
    ],
  };
  const [activeTab, setActiveTab] = useState("FII");

  return (
    <div className="space-y-6">

      <div className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
        <div className="text-white text-lg mb-2">Volume Trends</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={volumeData}>
            <XAxis dataKey="time" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
            <Line type="monotone" dataKey="st1" stroke="#e600ff" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="st2" stroke="#00f2ff" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="st3" stroke="#f6a800" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
          <div className="text-white text-sm mb-2">Shareholding</div>
          <PieChart width={160} height={160}>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={3}
              dataKey="value"
            >
              {donutData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
          <div className="flex gap-4 text-gray-400 text-xs mb-3">
            {Object.keys(shareholdingTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={activeTab === tab ? "text-white underline" : ""}
              >
                {tab}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={shareholdingTabs[activeTab]}>
              <Bar dataKey="value" fill="#4f46e5" barSize={20} radius={[10, 10, 10, 10]}>
                <LabelList dataKey="date" position="bottom" style={{ fill: "#aaa", fontSize: 12 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>


        <div className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
          <div className="text-white text-sm mb-2">Shareholding Insights</div>
          <ul className="text-sm text-gray-300 space-y-2">
            {[...Array(4)].map((_, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-1" />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
