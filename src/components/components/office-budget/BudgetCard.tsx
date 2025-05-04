// components/budget-cards.tsx
"use client";

import { DollarSign, ArrowUp, Loader2 } from "lucide-react";
import { getBudgetSummary } from "@/server/office-budget/createBudget";
import { useEffect, useState } from "react";

export function BudgetCards() {
  const [summary, setSummary] = useState({
    totalBudgeted: 0,
    totalActual: 0,
    variance: 0,
    percentageUsed: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const data = await getBudgetSummary();
        setSummary(data);
      } catch (error) {
        console.error("Error fetching budget summary:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader2 className="size-4 animate-spin" />
      </div>
    );
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-1">
          <div>
            <p className="mt-1 text-2xl font-bold">#{formatNumber(summary.totalBudgeted)}</p>
            <p className="text-sm font-medium text-gray-500">Total annual budget</p>
          </div>
          <div className="rounded-full bg-blue-500/10 p-3 text-blue-700/40">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
        <p className="mt-2 flex items-center text-sm text-green-600">
          <ArrowUp className="mr-1 h-4 w-4" />
          5% more than last year
        </p>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Amount used, YTD</p>
            <p className="mt-1 text-2xl font-bold">#{formatNumber(summary.totalActual)}</p>
          </div>
          <div className="rounded-full bg-orange-500/10 p-3 text-orange-700/40">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total budget balance</p>
            <p className="mt-1 text-2xl font-bold">{formatNumber(summary.variance)}</p>
          </div>
          <div className="bg-purple-500-500/10 text-purple-700-700/40 rounded-full p-3">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Budget % used</p>
            <p className="mt-1 text-2xl font-bold">{summary.percentageUsed.toFixed(0)}%</p>
          </div>
          <div className="text-green-700-700/40 rounded-full bg-green-500/10 p-3">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
