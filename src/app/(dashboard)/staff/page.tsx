import { QuickSearchStaffCard } from "@/components/components/staff/StaffHeader";
import StaffTable from "@/components/components/staff/StaffTable";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header
        title="All Staff"
        description="View, search for and add new staff"
      />
      <QuickSearchStaffCard />
      <StaffTable />
    </>
  );
}

export default page;

