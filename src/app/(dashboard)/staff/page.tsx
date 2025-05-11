import { QuickSearchStaffCard } from "@/components/components/staff/StaffHeader";
import StaffTable from "@/components/components/staff/StaffTable";
import Header from "@/components/layout/Header";
import { getAllStaffData } from "@/server/staff/getall-staff-action";
import React from "react";

async function page() {
  const staffData = await getAllStaffData();
  return (
    <>
      <Header
        title="All Staff"
        description="View, search for and add new staff"
      />
      <QuickSearchStaffCard />
      <StaffTable initialData={staffData} />;
    </>
  );
}

export default page;
