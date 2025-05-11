import React from "react";
import CreateCapacityBuilding from "@/components/components/capacity-building/CreateCapacityBuilding";
import Header from "@/components/layout/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const dynamic = "force-dynamic";

function page() {
  return (
    <>
      <Header
        title="Capacity Building"
        description="Create and submit request for staff training"
      />
      <Button variant="link" className="mb-10 text-blue-500">
        <Link href="/capacity-building" className="flex items-center gap-2">
          <ArrowLeft className="size-4" />
          Back
        </Link>
      </Button>
      <CreateCapacityBuilding />
    </>
  );
}

export default page;
