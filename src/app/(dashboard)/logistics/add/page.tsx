import CreateLogisticsRequest from "@/components/components/logistics/CreateLogisticsRequest";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Logistics request" description="Make and send logistics request." />
      <CreateLogisticsRequest />
    </>
  );
}

export default page;
