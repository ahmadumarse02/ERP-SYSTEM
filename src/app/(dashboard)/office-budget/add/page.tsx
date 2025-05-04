import { BudgetForm } from "@/components/components/office-budget/BudgetForm";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Header title="Create Budget" description="Create and send budget request." />
      <Button variant="link" className="mb-10 text-blue-500">
        <Link href="/office-budget" className="flex items-center gap-2">
          <ArrowLeft className="size-4" />
          Back
        </Link>
      </Button>
      <BudgetForm />
    </>
  );
}

export default page;
