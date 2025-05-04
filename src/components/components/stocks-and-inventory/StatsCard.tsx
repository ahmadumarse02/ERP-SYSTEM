"use client";

import { Package } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  className?: string;
}

export function StatsCard({ title, value, className = "" }: StatsCardProps) {
  return (
    <div className="bg-card mb-10 h-[150px] rounded-lg border px-6 py-10 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{value}</span>
          <h3 className="text-muted-foreground text-sm font-medium">{title}</h3>
        </div>
        <Package className={`size-8 rounded-full p-1 ${className}`} />
      </div>
    </div>
  );
}
