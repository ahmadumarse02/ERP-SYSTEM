import { z } from "zod";

export const logisticsRequestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  requestedBy: z.string().min(1, "Requester name is required"),
  dateFrom: z.string().min(1, "Start date is required"),
  dateTo: z.string().min(1, "End date is required"),
  paymentVoucher: z.instanceof(File).optional(),
  purpose: z.string().min(10, "Purpose must be at least 10 characters"),
  sentTo: z.string().min(1, "Recipient is required"),
  amount: z.number().min(1, "Amount must be greater than 0"),
  status: z.enum(["PENDING", "APPROVED", "CANCELLED"]),
});

export type LogisticsRequestSchema = z.infer<typeof logisticsRequestSchema>;
