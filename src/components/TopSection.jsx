// src/components/TopSection.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function TopSection() {
  return (
    <div className="flex flex-col gap-4 bg-[#1c1c24] p-4 rounded-xl shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          className="w-10 h-10"
        />

        {/* Ticker & Company */}
        <div>
          <div className="text-xl font-semibold">AAPL <span className="font-normal text-gray-400">Apple Inc.</span></div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">$25,901</div>
            <div className="text-green-500 flex items-center text-sm font-medium">
              <ArrowUpRight className="w-4 h-4" />
              0.27%
            </div>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <div className="text-sm text-gray-400">28 January, 4:00pm EST | Market Open</div>

      {/* Description */}
      <div className="text-sm text-gray-300">
        Cipla is trading -0.89% lower at Rs 1,459.05 as compared to its last closing price. Cipla has been trading in the price range of 1,482.20 & 1,438.75. Cipla has given -4.55% in this year & -0.87% in the last 5 days. Cipla has TTM P/E ratio 24.74 as compared to the sect&nbsp;...
        <span className="underline font-semibold cursor-pointer"> see more</span>
      </div>
    </div>
  );
}
