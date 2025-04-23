import React from "react";
import { Card, CardContent } from "./ui/card";
import { Newspaper } from "lucide-react"; // Icon (optional)

const newsItems = [
  {
    title: "Apple Releases New iPhone with AI Chip",
    date: "Apr 21, 2025",
    preview: "The latest iPhone includes Apple's first custom AI processor...",
  },
  {
    title: "AAPL Stock Hits All-Time High",
    date: "Apr 20, 2025",
    preview: "Shares of Apple Inc. reached a record price following strong earnings...",
  },
  {
    title: "Analysts Upgrade AAPL to Strong Buy",
    date: "Apr 19, 2025",
    preview: "Several analysts have upgraded Apple stock amid rising demand for devices...",
  },
];

export default function NewsSection() {
  return (
    <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
      <CardContent>
        <div className="text-xl mb-4 flex items-center gap-2">
          <Newspaper size={20} /> News
        </div>
        <div className="space-y-4">
          {newsItems.map((item, idx) => (
            <div key={idx} className="border-b border-[#2c2c33] pb-2">
              <div className="font-semibold text-white">{item.title}</div>
              <div className="text-sm text-gray-400">{item.date}</div>
              <div className="text-gray-300 text-sm">{item.preview}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
