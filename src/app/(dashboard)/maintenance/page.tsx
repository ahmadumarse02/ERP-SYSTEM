import { MaintenceCard } from "@/components/components/maintenance/Header";
import MaintenanceCalendar from "@/components/components/maintenance/MaintenanceCalendar";
import MaintenanceDashboard from "@/components/components/maintenance/MaintenanceDashboard";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Maintenance" description="View and create schedule for maintenance" />
      <MaintenceCard />
      <MaintenanceDashboard />
      <div className="">
        <MaintenanceCalendar />
      </div>
    </>
  );
}

export default page;
