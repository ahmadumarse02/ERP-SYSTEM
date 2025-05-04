import { LogisticsCard } from "@/components/components/logistics/Header";
import { LogisticsStatsOverview } from "@/components/components/logistics/LogisticsStatsOverview";
import LogisticsTable from "@/components/components/logistics/Table";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Logistics request" description="Make and send logistics request." />
      <LogisticsStatsOverview />
      <LogisticsCard />
      <LogisticsTable />
    </>
  );
}

export default page;

// export const dynamic = 'force-static'