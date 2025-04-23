import React from "react";
import { Card, CardContent } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function FinancialsSection() {
  const financialsData = [
    { name: "Mar 2021", income: 18 },
    { name: "Mar 2022", income: 28 },
    { name: "Mar 2023", income: 22 },
    { name: "Mar 2024", income: 24 },
  ];

  const dummyTexts = Array(4).fill("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

  return (
    <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
      <CardContent>
        <div className="text-xl font-semibold mb-4">Financials</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={financialsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: "#1c1c22", border: "none" }} />
              <Bar dataKey="income" fill="#7157f9" barSize={30} />
            </BarChart>
          </ResponsiveContainer>

          <div className="text-sm space-y-3">
            {dummyTexts.map((text, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="h-2 w-2 mt-2 bg-green-400 rounded-full"></span>
                <p className="text-[#ccc]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
