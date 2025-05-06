"use client";

import { useEffect, useState } from "react";
import { getLogisticsStats } from "@/server/logistics/getLogisticsStats";
import { StatsCard } from "./StatsCard";
import { DollarSign, CheckCircle } from "lucide-react";

export function LogisticsStatsOverview() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getLogisticsStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats)
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
        title="Total request made"
        value={stats.totalRequests}
        change={stats.comparisonData.requestsChange}
        changeText="more than last year"
        icon={<DollarSign className="h-5 w-5 text-blue-500" />}
      />
      <StatsCard
        title="Total cost incurred"
        value={`₦${stats.totalCost.toLocaleString()}`}
        change={stats.comparisonData.costChange}
        changeText="more than last year"
        icon={<DollarSign className="h-5 w-5 text-green-500" />}
      />
      <StatsCard
        title="Pending request"
        value={stats.pendingRequests}
        icon={<DollarSign className="h-5 w-5 text-yellow-500" />}
      />
      <StatsCard
        title="Approved request"
        value={stats.approvedRequests}
        icon={<CheckCircle className="h-5 w-5 text-purple-500" />}
      />
    </div>
  );
}
