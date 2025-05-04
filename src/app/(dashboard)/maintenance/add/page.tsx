import CreateMaintenance from "@/components/components/maintenance/CreateMaintenance";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Maintenance" description="View and create schedule for maintenance" />
      <CreateMaintenance />
    </>
  );
}

export default page;
