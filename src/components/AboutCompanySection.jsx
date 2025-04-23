import React from "react";
import { Card, CardContent } from "./ui/card";



// ✅ This is required for default import to work
export default function AboutCompanySection() {
  return (
    <Card className="bg-[#1c1c22] p-4 rounded-2xl shadow-lg">
    <CardContent>
      <div className="text-xl mb-2">About This Company</div>
      <p className="text-gray-300 text-sm mt-2">
        Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables,
        and accessories worldwide. The company also sells a variety of related services, including digital
        content and software.
      </p>
    </CardContent>
  </Card>
  );
}
