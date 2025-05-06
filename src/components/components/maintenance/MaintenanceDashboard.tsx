/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getMaintenanceStats } from "@/server/maintenance/getMaintenanceStats";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUp, Loader2, Wrench } from "lucide-react";

export default function MaintenanceDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMaintenanceStats();
        setStats(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  if (!stats) return <div>Failed to load data</div>;

  return (
    <div className="m-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Scheduled maintenance"
          value={stats.counts.scheduled}
          change={stats.comparison.scheduled}
          icon={<Wrench className="text-blue-500" />}
        />
        <StatCard
          title="Completed maintenance"
          value={stats.counts.completed}
          change={stats.comparison.completed}
          icon={<Wrench className="text-green-500" />}
        />
        <StatCard
          title="Pending maintenance"
          value={stats.counts.pending}
          change={stats.comparison.pending}
          icon={<Wrench className="text-yellow-500" />}
        />
        <StatCard
          title="Overdue maintenance"
          value={stats.counts.overdue}
          change={stats.comparison.overdue}
          icon={<Wrench className="text-red-500" />}
        />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="bg-secondary rounded-md p-2">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-muted-foreground mt-1 flex items-center text-xs">
          <ArrowUp className="mr-1 h-3 w-3" />
          {change} more than last quarter
        </div>
      </CardContent>
    </Card>
  );
}

export const revalidate = 0;
