"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LogisticsCard() {
  return (
    <Card className="mt-8 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Logistics request</h1>
        </div>
        <Link href="/logistics/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">
            Add Logistics
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
