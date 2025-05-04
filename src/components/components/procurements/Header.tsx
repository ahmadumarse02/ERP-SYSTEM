"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProcurementsCard() {
  return (
    <Card className="mb-8 w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">procurements</h1>
        </div>
        <Link href="/procurements/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">Add procurements</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProcurementsCard;
