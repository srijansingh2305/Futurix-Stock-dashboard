"use client";

import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Tooltip,
  LabelList,
} from "recharts";

export default function FinancialsSection() {
  const [activeTab, setActiveTab] = useState("Income");
  const [activeSubTab, setActiveSubTab] = useState("Financial");

  const financialData = [
    { name: "Mar 2021", value: 18, percent: "+0.27%" },
    { name: "Mar 2022", value: 28, percent: "+0.27%" },
    { name: "Mar 2023", value: 22, percent: "+0.27%" },
    { name: "Mar 2024", value: 24, percent: "+0.27%" },
  ];

  const dummyTexts = Array(5).fill(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );

  const mainTabs = ["Income", "Balance", "Cash Flow"];
  const subTabs = ["Financial", "Valuation"];

  return (
    <div className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
      <div className="text-white text-lg font-semibold mb-4">Financials</div>

      <div className="flex gap-6 text-gray-400 text-sm border-b border-[#2c2c2c] mb-4">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? "text-white border-b-2 border-white" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={financialData}
            margin={{ top: 30, right: 20, left: 20, bottom: 20 }}
          >
            <Tooltip
              contentStyle={{ backgroundColor: "#1c1c22", border: "none", color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="value"
              fill="#4f46e5"
              barSize={30}
              radius={[10, 10, 10, 10]}
            >
              <LabelList
                dataKey="value"
                position="top"
                content={({ x, y, value, index }) => {
                  const { percent } = financialData[index];
                  return (
                    <text
                      x={x}
                      y={y - 10}
                      fill="#fff"
                      fontSize={12}
                      textAnchor="middle"
                    >
                      {`${value}.00K `}
                      <tspan fill="#27ff8c" fontSize={11}>
                        {percent}
                      </tspan>
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

       
        <div>
    
          <div className="flex gap-4 text-gray-400 text-sm mb-3">
            {subTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={activeSubTab === tab ? "text-white underline" : ""}
              >
                {tab}
              </button>
            ))}
          </div>

          <ul className="text-sm text-gray-300 space-y-3">
            {dummyTexts.map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-1" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
