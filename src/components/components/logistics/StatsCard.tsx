"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeText?: string;
  icon?: React.ReactNode;
}

export function StatsCard({ title, value, change, changeText, icon }: StatsCardProps) {
  const isPositive = change && change > 0;
  const hasChange = change !== undefined;

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
        {icon && <div className="rounded-md bg-gray-100 p-3">{icon}</div>}
      </div>

      {hasChange && (
        <p
          className={`mt-2 flex items-center text-sm ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDown className="mr-1 h-4 w-4" />
          )}
          {Math.abs(change)} {changeText}
        </p>
      )}
    </div>
  );
}
