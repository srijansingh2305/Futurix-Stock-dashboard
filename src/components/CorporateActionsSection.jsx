import React from "react";
import { Card, CardContent } from "./ui/card";

const corporateActions = [
  { date: "2025-01-15", type: "Dividend", description: "$0.22 per share" },
  { date: "2024-11-10", type: "Stock Split", description: "2-for-1 split" },
  { date: "2024-08-05", type: "Earnings", description: "Q2 earnings release" },
];

const CorporateActionsSection = () => (
  <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
    <CardContent>
      <div className="text-xl mb-2">Corporate Actions</div>
      <table className="w-full text-left mt-4">
        <thead>
          <tr className="text-gray-400">
            <th className="pb-2">Date</th>
            <th className="pb-2">Type</th>
            <th className="pb-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {corporateActions.map((action, idx) => (
            <tr key={idx} className="border-t border-[#333] text-sm">
              <td className="py-2">{action.date}</td>
              <td>{action.type}</td>
              <td>{action.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);

export default CorporateActionsSection;