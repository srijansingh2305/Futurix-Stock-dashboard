import React from "react";
import { Card, CardContent } from "./ui/card";

export default function AboutCompanySection() {
  return (
    <Card className="bg-[#1c1c22] p-6 rounded-2xl shadow-lg">
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          <div>
            <div className="text-white text-lg font-semibold mb-2">
              About the Company Cipla
            </div>

            <div className="flex flex-wrap text-sm text-gray-400 gap-6 mb-4">
              <div><span className="text-white font-medium">Industry:</span> Tech</div>
              <div><span className="text-white font-medium">ISIN:</span> 123</div>
              <div><span className="text-white font-medium">BSE Code:</span> 123</div>
              <div><span className="text-white font-medium">NSE Code:</span> 123</div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in
              manufacturing, developing and marketing a wide range of branded and generic formulations and
              Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures.
              The Pharmaceuticals segment is engaged in developing, manufacturing, selling, and distributing generic or branded
              generic medicines, as well as Active Pharmaceutical Ingredients (API). The New ventures segment includes operations of the
              Company, including consumer healthcare, Biosimilars and specialty business...
            </p>
          </div>

          <div>
            <div className="text-white text-lg font-semibold mb-2">Management Info</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in
              manufacturing, developing and marketing a wide range of branded and generic formulations and
              Active Pharmaceutical Ingredients (APIs). It operates through two segments: Pharmaceuticals and New ventures. 
              Its global reach includes India, the U.S., South Africa, and other regions.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
