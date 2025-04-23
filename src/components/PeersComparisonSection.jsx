import React from "react";
import { Card, CardContent } from "./ui/card";

const peers = [
  { name: "Microsoft", pe: 34.2, marketCap: "2.4T" },
  { name: "Google", pe: 27.3, marketCap: "1.8T" },
  { name: "Amazon", pe: 59.1, marketCap: "1.6T" },
];

const PeersComparisonSection = () => (
  <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
    <CardContent>
      <div className="text-xl mb-2">Peers Comparison</div>
      <table className="w-full text-left mt-4">
        <thead>
          <tr className="text-gray-400">
            <th className="pb-2">Company</th>
            <th className="pb-2">P/E</th>
            <th className="pb-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {peers.map((peer, idx) => (
            <tr key={idx} className="border-t border-[#333] text-sm">
              <td className="py-2">{peer.name}</td>
              <td>{peer.pe}</td>
              <td>{peer.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);

export default PeersComparisonSection;
