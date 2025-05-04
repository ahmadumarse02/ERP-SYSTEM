"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SearchHeader() {
  return (
    <Card className="w-full">
      <CardContent className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold">25</h1>
          <p className="text-sm text-[#515151]">Total payment vouchers</p>
        </div>
        <div className="w-full max-w-[200px]">
          <p className="text-sm font-medium">Filter payment voucher</p>
          <Select>
            <SelectTrigger className="w-full rounded-lg border border-[#ACC3E7] bg-[#F2F7FF] px-3 py-2 focus:outline-none">
              <SelectValue placeholder="All memo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All staff</SelectItem>
              <SelectItem value="active">Active staff</SelectItem>
              <SelectItem value="inactive">Inactive staff</SelectItem>
              <SelectItem value="Human Resources">Human Resources staff</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/payment-voucher/add">
          <Button className="bg-gradient h-[46px] w-full max-w-[180px]">
            Create Payment Voucher
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
