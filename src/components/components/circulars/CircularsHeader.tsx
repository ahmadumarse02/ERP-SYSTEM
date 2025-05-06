"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search } from "lucide-react";

export function CircularHeader() {
  return (
    <Card className="mb-10 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="flex h-[50px] items-center justify-between rounded-lg border border-[#D0D0D0] px-3 py-1">
          <input
            placeholder="Enter search word"
            className="border-none focus:outline-none"
          />
          <Search className="mr-4" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Total circulars</h1>
        </div>
        <Link href="/circulars/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">
            Add New Staff
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
