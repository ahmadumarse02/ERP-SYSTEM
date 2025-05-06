import CreateProcurements from "@/components/components/procurements/CreateProcurements";
import Header from "@/components/layout/Header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <>
      <Header
        title="Procurement"
        description="Request for, and view all requested procurements."
      />
      <Button
        type="button"
        variant="link"
        className="mb-4 text-xl text-blue-500"
      >
        <Link href="/procurements" className="flex items-center gap-2">
          <ArrowLeft />
          Back
        </Link>
      </Button>
      <CreateProcurements />
    </>
  );
}

export default page;
