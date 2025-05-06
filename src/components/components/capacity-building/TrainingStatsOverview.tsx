"use client";

import { useEffect, useState } from "react";
import { getTrainingStats } from "@/server/capacity-building/getTrainingStats";
import { StatsCard } from "./StatsCard";
import { ClipboardList, Users, CheckCircle, BarChart2 } from "lucide-react";

export function TrainingStatsOverview() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getTrainingStats();
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
        title="Total training request"
        value={stats.totalRequests}
        icon={<ClipboardList className="h-5 w-5 text-blue-500" />}
      />
      <StatsCard
        title="Total staff trained"
        value={stats.totalStaffTrained}
        icon={<Users className="h-5 w-5 text-green-500" />}
      />
      <StatsCard
        title="Total training done"
        value={stats.totalCompleted}
        icon={<CheckCircle className="h-5 w-5 text-purple-500" />}
      />
      <StatsCard
        title="Staff training rate"
        value={stats.trainingRate}
        icon={<BarChart2 className="h-5 w-5 text-orange-500" />}
      />
    </div>
  );
}
