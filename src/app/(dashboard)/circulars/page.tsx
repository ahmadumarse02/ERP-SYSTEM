import { CircularHeader } from "@/components/components/circulars/CircularsHeader";
import CircularsTable from "@/components/components/circulars/CircularsTable";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Circulars" description="Search for  and view all circulars" />
      <CircularHeader />
      <CircularsTable />
    </>
  );
}

export default page;