"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MaintenceCard() {
  return (
    <Card className="mt-8 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">Maintence</h1>
        </div>
        <Link href="/maintenance/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">Add Maintence</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
