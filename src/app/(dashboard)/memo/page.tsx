import { MemoHeader } from "@/components/components/memo/Header";
import { MemoTable } from "@/components/components/memo/MemoTable";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Create Memo" description="Create and send memos to designated offices." />
      <MemoHeader />
      <MemoTable />
    </>
  );
}

export default page;
