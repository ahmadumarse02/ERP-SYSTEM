"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MemoHeader() {
  return (
    <Card className="mb-10 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Memo</h1>
        </div>
        <div className="flex h-[50px] items-center justify-between rounded-lg border border-[#D0D0D0] px-3 py-1">
          <input placeholder="Enter search word" className="border-none focus:outline-none" />
          <Search className="mr-4" />
        </div>
        <Link href="/memo/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">Add New memo</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
