"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CapacityBuildingCard() {
  return (
    <Card className="mb-8 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Capacity building</h1>
        </div>
        <Link href="/capacity-building/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">
            Capacity building
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
