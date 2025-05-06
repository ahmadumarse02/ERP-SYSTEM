"use server";

import prisma from "@/lib/prisma";
import {
  StockValues,
  stockSchema,
} from "@/types/stocks-and-inventory/stockSchema";

export async function createStockItem(data: StockValues) {
  const result = stockSchema.safeParse(data);

  if (!result.success) {
    return {
      error: "Validation failed",
      details: result.error.format(),
      message: "Please check your inputs",
    };
  }

  try {
    await prisma.stock.create({
      data: {
        ...result.data,
        totalAmount: result.data.qtyPurchased * result.data.unitPrice,
      },
    });

    return { success: true, message: "Stock item created successfully" };
  } catch (error) {
    console.error("Error creating stock item:", error);
    return { error: "Failed to create stock item" };
  }
}
