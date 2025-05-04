import { z } from "zod";

export const BudgetFormSchema = z.object({
  budgetNumber: z.string().min(1, "Budget number is required"),
  description: z.string().min(1, "Description is required"),
  date: z.date(),
  receivingOffice: z.string().min(1, "Receiving office is required"),
  budgetedAmount: z.number().min(0, "Amount must be positive"),
  actualAmount: z.number().optional(),
});

export type BudgetFormValues = z.infer<typeof BudgetFormSchema>;
