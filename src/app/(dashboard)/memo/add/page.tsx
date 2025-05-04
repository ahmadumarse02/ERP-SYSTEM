import { MemoForm } from "@/components/components/memo/MemoForm";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <Header title="Create Memo" description="Create and send memos to designated offices." />
      <Button type="button" variant="link" className="mb-4 text-xl text-blue-500">
        <Link href="/memo" className="flex items-center gap-2">
          <ArrowLeft />
          Back
        </Link>
      </Button>
      <MemoForm />
    </>
  );
}

export default page;
