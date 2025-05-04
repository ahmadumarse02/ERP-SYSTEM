"use client";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, icon, className = "" }: StatsCardProps) {
  return (
    <div className={`mb-10 rounded-lg border bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
        {icon && <div className="rounded-md bg-gray-100 p-3">{icon}</div>}
      </div>
    </div>
  );
}
