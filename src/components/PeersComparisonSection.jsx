import React from "react";
import { ArrowDownRight } from "lucide-react";

const peers = [
  {
    name: "Reliance Industries",
    technicalRating: "Bullish",
    price: 2585,
    change: 1.8,
    pe: 22.5,
    pb: 4.1,
    dividend: 1.2,
    debtToEquity: 0.35,
  },
  {
    name: "Tata Motors",
    technicalRating: "Neutral",
    price: 635,
    change: -0.9,
    pe: 18.2,
    pb: 3.7,
    dividend: 2.0,
    debtToEquity: 0.75,
  },
  {
    name: "Infosys",
    technicalRating: "Bearish",
    price: 1580,
    change: -1.5,
    pe: 26.8,
    pb: 6.2,
    dividend: 1.8,
    debtToEquity: 0.20,
  },
  {
    name: "HDFC Bank",
    technicalRating: "Bullish",
    price: 1705,
    change: 2.3,
    pe: 19.5,
    pb: 3.1,
    dividend: 1.5,
    debtToEquity: 0.50,
  },
  {
    name: "Bharti Airtel",
    technicalRating: "Neutral",
    price: 875,
    change: 0.2,
    pe: 21.0,
    pb: 2.8,
    dividend: 0.9,
    debtToEquity: 0.65,
  },
  {
    name: "Kotak Mahindra Bank",
    technicalRating: "Bearish",
    price: 1340,
    change: -2.1,
    pe: 25.3,
    pb: 5.4,
    dividend: 1.3,
    debtToEquity: 0.40,
  },
  {
    name: "Adani Enterprises",
    technicalRating: "Bullish",
    price: 2965,
    change: 3.1,
    pe: 28.5,
    pb: 7.2,
    dividend: 1.1,
    debtToEquity: 0.95,
  },
  {
    name: "Maruti Suzuki",
    technicalRating: "Neutral",
    price: 10790,
    change: -0.5,
    pe: 22.7,
    pb: 3.5,
    dividend: 2.3,
    debtToEquity: 0.30,
  },
];


export default function PeersComparison() {
  return (
    <div className="bg-[#1c1c22] mt-8 p-6 rounded-2xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4">Peers Comparison</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="px-4 py-2">Names</th>
              <th className="px-4 py-2">Technical Rating</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">%Change</th>
              <th className="px-4 py-2">P/E</th>
              <th className="px-4 py-2">P/B</th>
              <th className="px-4 py-2">Dividend Yield</th>
              <th className="px-4 py-2">Debt to Equity</th>
            </tr>
          </thead>
          <tbody>
            {peers.map((peer, idx) => (
              <tr key={idx} className="border-t border-gray-700">
                <td className="px-4 py-2">{peer.name}</td>
                <td className="px-4 py-2 flex items-center gap-2 text-green-400">
                  <ArrowDownRight size={16} /> {peer.technicalRating}
                </td>
                <td className="px-4 py-2">{peer.price}</td>
                <td className="px-4 py-2 text-red-400">{peer.change}</td>
                <td className="px-4 py-2">{peer.pe}</td>
                <td className="px-4 py-2">{peer.pb}</td>
                <td className="px-4 py-2">{peer.dividend}</td>
                <td className="px-4 py-2">{peer.debtToEquity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
