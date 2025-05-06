/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getStockStats } from "@/server/stocks-and-inventory/getStockStats";
import { StatsCard } from "./StatsCard";

export function StatsOverview() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getStockStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats)
    return (
      <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-lg bg-gray-100"
          ></div>
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Categories"
        value={stats.totalCategories}
        className="bg-purple-500/10 text-purple-700"
      />
      <StatsCard
        title="Total items"
        value={stats.totalItems}
        className="bg-green-500/10 text-green-700"
      />
      <StatsCard
        title="Total item cost"
        value={`¥${stats.totalItemCost.toLocaleString()}`}
        className="bg-red-500/10 text-red-700"
      />
      <StatsCard
        title="Items low in stock"
        value={stats.lowInStock}
        className="bg-blue-500/10 text-blue-700"
      />
    </div>
  );
}
