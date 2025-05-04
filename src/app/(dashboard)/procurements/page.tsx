import ProcurementsTable from "@/components/components/procurements/CreateTable";
import Header from "@/components/layout/Header";
import React from "react";
import ProcurementsCard from "@/components/components/procurements/Header";

function page() {
  return (
    <>
      <Header title="Procurement" description="Request for, and view all requested procurements." />
      <ProcurementsCard />
      <ProcurementsTable />;
    </>
  );
}

export default page;

export const dynamic = 'force-static'