// app/server/stocks-and-inventory/getAllStock.ts

"use server";

import prisma from "@/lib/prisma";

export async function getAllStockItems() {
  try {
    const stockItems = await prisma.stock.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return stockItems;
  } catch (error) {
    console.error("Error fetching stock items:", error);
    throw new Error("Failed to fetch stock items");
  }
}
