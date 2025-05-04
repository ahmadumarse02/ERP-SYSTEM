"use server";

import { BudgetFormSchema, BudgetFormValues } from "@/types/office-budget/budgetSchema";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBudget(data: BudgetFormValues) {
  const validatedData = BudgetFormSchema.parse(data);

  try {
    const budget = await prisma.budget.create({
      data: {
        budgetNumber: validatedData.budgetNumber,
        description: validatedData.description,
        date: validatedData.date,
        receivingOffice: validatedData.receivingOffice,
        budgetedAmount: validatedData.budgetedAmount,
        actualAmount: validatedData.actualAmount,
      },
    });

    revalidatePath("/budgets");
    return { success: true, budget };
  } catch {
    return { success: false, error: "Failed to create budget" };
  }
}

export async function getAllBudgets() {
  try {
    const budgets = await prisma.budget.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return budgets;
  } catch {
    throw new Error("Failed to fetch budgets");
  }
}

export async function getBudgetSummary() {
  try {
    const budgets = await prisma.budget.findMany();

    const totalBudgeted = budgets.reduce((sum, budget) => sum + budget.budgetedAmount, 0);
    const totalActual = budgets.reduce((sum, budget) => sum + (budget.actualAmount || 0), 0);
    const variance = totalBudgeted - totalActual;
    const percentageUsed = (totalActual / totalBudgeted) * 100;

    return {
      totalBudgeted,
      totalActual,
      variance,
      percentageUsed,
    };
  } catch {
    throw new Error("Failed to calculate budget summary");
  }
}
