"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllBudgets } from "@/server/office-budget/createBudget";
import { useEffect, useState } from "react";
import { Budget } from "@prisma/client";
import { Plus, SquaresSubtract } from "lucide-react";

export function BudgetTable() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBudgets() {
      try {
        const data = await getAllBudgets();
        setBudgets(data);
      } catch (error) {
        console.error("Error fetching budgets:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBudgets();
  }, []);

  if (loading) {
    return <div>Loading budgets...</div>;
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="mt-10 rounded-lg border bg-white p-10 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Budget No.</TableHead>
            <TableHead>Budget Description</TableHead>
            <TableHead>Budgeted Amount</TableHead>
            <TableHead>Actual Amount</TableHead>
            <TableHead>Variance</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgets.map((budget, index) => {
            const variance = budget.budgetedAmount - (budget.actualAmount || 0);
            const isPositive = variance >= 0;

            return (
              <TableRow key={budget.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{budget.budgetNumber}</TableCell>
                <TableCell>{budget.description}</TableCell>
                <TableCell>{formatNumber(budget.budgetedAmount)}</TableCell>
                <TableCell>
                  {budget.actualAmount ? `${formatNumber(budget.actualAmount)}` : "-"}
                </TableCell>
                <TableCell className={isPositive ? "text-green-600" : "text-red-600"}>
                  <div className="flex items-center">
                    {isPositive ? (
                      <Plus className="mr-1 h-4 w-4" />
                    ) : (
                      <SquaresSubtract className="mr-1 h-4 w-4" />
                    )}
                    {Math.abs(variance).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </TableCell>
                <TableCell>{new Date(budget.date).toLocaleDateString("en-GB")}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
