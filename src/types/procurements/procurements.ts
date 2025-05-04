import * as z from "zod";

export const itemSchema = z.object({
  itemName: z.string().min(1, { message: "Item name is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  data: z.coerce.date({ required_error: "Date is required" }),
  unitPrice: z.number().min(0, { message: "Unit price must be 0 or more" }),
  totalPrice: z.number().min(0, { message: "Total price must be 0 or more" }),
  requestBy: z.string().min(1, { message: "Requested by is required" }),
  sentTo: z.string().min(1, { message: "Sent to is required" }),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]).default("PENDING"),
});

export type ItemsSchema = z.infer<typeof itemSchema>;
