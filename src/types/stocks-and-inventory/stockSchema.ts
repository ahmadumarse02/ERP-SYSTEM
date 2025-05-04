import { z } from "zod";

export const stockSchema = z.object({
  image: z.string().optional(),
  productName: z.string().min(1, "Product name is required"),
  productId: z.string().min(1, "Product ID is required"),
  category: z.string().min(1, "Category is required"),
  qtyPurchased: z.number().min(1, "Quantity must be at least 1"),
  unitPrice: z.number().min(0, "Unit price must be 0 or more"),
  totalAmount: z.number().min(0, "Total amount must be 0 or more"),
  inStock: z.number().min(0, "In-stock quantity must be 0 or more"),
  supplier: z.string().min(1, "Supplier is required"),
  status: z.enum(["IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"]),
});

export type StockValues = z.infer<typeof stockSchema>;
