"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

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
  if (!stats) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md flex justify-center items-center w-full max-w-3xl mx-auto h-[300px]">
        <p>Loading statistics...</p>
      </div>
    );
  }

  return (
    <div className="bg-white h-[327px] p-6 rounded-xl shadow-md flex justify-between items-center w-full max-w-3xl mx-auto">
      <div>
        <h2 className="text-xl font-semibold mb-2">Logistics Requests</h2>
        <p className="font-bold text-lg">{stats.total} Total Requests</p>
        <ul className="mt-4 space-y-1">
          {stats.data.map((item) => (
            <li key={item.name} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
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
export const revalidate = 0;