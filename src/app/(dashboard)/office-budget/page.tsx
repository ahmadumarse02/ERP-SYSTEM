import { BudgetCards } from "@/components/components/office-budget/BudgetCard";
import { BudgetHeader } from "@/components/components/office-budget/BudgetHeader";
import { BudgetTable } from "@/components/components/office-budget/BudgetTable";
import Header from "@/components/layout/Header";
import React from "react";

function page() {
  return (
    <>
      <Header title="Create Budget" description="Create and send budget request." />
      <BudgetCards />
      <BudgetHeader />
      <BudgetTable />
    </>
  );
}

export default page;
