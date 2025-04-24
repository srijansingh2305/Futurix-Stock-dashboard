
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-700 rounded-xl mb-4 bg-[#1c1c22]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left text-white font-medium"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-sm text-gray-300">
          {content}
        </div>
      )}
    </div>
  );
};

export default function CompanyFAQ() {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-white text-xl font-semibold">Cipla Price FAQs</h2>
      <AccordionItem
        title="About Cipla"
        content={`Cipla Limited is an India-based global pharmaceutical company. The Company is engaged in manufacturing, developing and marketing a wide range of branded and generic formulations and Active Pharmaceutical Ingredients (APIs). The Company operates through two segments: Pharmaceuticals and New ventures. The Pharmaceuticals segment is engaged in developing, manufacturing, selling, and distributing generic or branded generic medicines, as well as Active Pharmaceutical Ingredients (API). The New ventures segment includes the operations of the Company, a consumer healthcare, Biosimilars and specialty business. Its product portfolio spans complex generics, as well as drugs in the respiratory, anti-retroviral, urology, cardiology, anti-infective and central nervous system (CNS).`}
      />
    </div>
  );
}
