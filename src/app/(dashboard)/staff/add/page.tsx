import CreateNewStaff from "@/components/components/staff/CreateStaff";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header
        title="All Staff"
        description="View, search for and add new staff"
      />
      <CreateNewStaff />
    </>
  );
}

export default page;