import CapacityBuildingTable from "@/components/components/capacity-building/CapacityBuildingTable";
import { CapacityBuildingCard } from "@/components/components/capacity-building/Header";
import { TrainingStatsOverview } from "@/components/components/capacity-building/TrainingStatsOverview";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header
        title="Capacity Building"
        description="Create and submit request for staff training"
      />
      <TrainingStatsOverview />
      <CapacityBuildingCard />
      <CapacityBuildingTable />
    </>
  );
}

export default page;
