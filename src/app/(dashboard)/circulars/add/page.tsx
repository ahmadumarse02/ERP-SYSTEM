import CreateCirculars from "@/components/components/circulars/CreateCirculars";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Header
        title="Circulars"
        description="Search for  and view all circulars"
      />
      <Button variant="link" className="mb-10 text-blue-500">
        <Link href="/circulars" className="flex items-center gap-2">
          <ArrowLeft className="size-4" />
          Back
        </Link>
      </Button>
      <CreateCirculars />
    </>
  );
}

export default page;
