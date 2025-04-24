import React from "react";

import TopSection from "../components/TopSection";
import NewsSection from "../components/NewsSection";
import ForecastSection from "../components/ForecastSection";
import FinancialsSection from "../components/FinancialsSection";
import VolumeTrendsSection from "../components/VolumeTrendsSection";
import CorporateActionsSection from "../components/CorporateActionsSection";
import AboutCompanySection from "../components/AboutCompanySection";
import PeersComparisonSection from "../components/PeersComparisonSection";
import CompanyFAQ from "../components/CompanyFAQ";
import MarketOverviewSection from "../components/MarkeytOverviewSection";


export default function FuturixStockDashboard() {
  return (
    <div className="p-6 bg-[#0e0e12] text-white min-h-screen font-sans space-y-8">
      <div className="text-2xl font-bold">Apple Inc. (AAPL)</div>

      <TopSection />
      <NewsSection />
      <FinancialsSection />
      <ForecastSection />
      <MarketOverviewSection />
      <CorporateActionsSection />
      <AboutCompanySection />
      <PeersComparisonSection />
      <VolumeTrendsSection />
      <CompanyFAQ />
    </div>
  );
}
