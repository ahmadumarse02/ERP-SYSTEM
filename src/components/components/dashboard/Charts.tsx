"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const COLORS = {
  Pending: "#f59e0b",
  Approved: "#22c55e",
  Cancelled: "#ef4444",
};

export type LogisticsStats = {
  total: number;
  data: {
    name: "Pending" | "Approved" | "Cancelled";
    value: number;
  }[];
};

function LogisticsChart({ stats }: { stats?: LogisticsStats }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!stats) {
    return (
      <div className="mx-auto flex h-[300px] w-full max-w-3xl items-center justify-center rounded-xl bg-white p-6 shadow-md">
        <p>Loading statistics...</p>
      </div>
    );
  }

  if (!isMounted) {
    return (
      <div className="mx-auto h-[327px] w-full max-w-3xl rounded-xl bg-white p-6 shadow-md">
        {/* Empty placeholder with same dimensions */}
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-[327px] w-full max-w-3xl items-center justify-between rounded-xl bg-white p-6 shadow-md">
      <div>
        <h2 className="mb-2 text-xl font-semibold">Logistics Requests</h2>
        <p className="text-lg font-bold">{stats.total} Total Requests</p>
        <ul className="mt-4 space-y-1">
          {stats.data.map((item) => (
            <li key={item.name} className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[item.name] }}
              />
              <span className="font-medium">{item.value}</span> {item.name}
            </li>
          ))}
        </ul>
      </div>

      <PieChart width={200} height={200}>
        <Pie
          data={stats.data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
        >
          {stats.data.map((entry) => (
            <Cell key={entry.name} fill={COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default LogisticsChart;
