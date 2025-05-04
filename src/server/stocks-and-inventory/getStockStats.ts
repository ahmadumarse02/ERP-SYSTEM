// server/stock/getStockStats.ts
"use server";

import prisma from "@/lib/prisma";

export async function getStockStats() {
  try {
    // Total categories
    const totalCategories = await prisma.stock.groupBy({
      by: ["category"],
      _count: {
        category: true,
      },
    });

    // Total items
    const totalItems = await prisma.stock.aggregate({
      _sum: {
        qtyPurchased: true,
      },
    });

    // Total item cost
    const totalItemCost = await prisma.stock.aggregate({
      _sum: {
        totalAmount: true,
      },
    });

    // Items low in stock
    const lowInStock = await prisma.stock.count({
      where: {
        status: "LOW_STOCK",
      },
    });

    return {
      totalCategories: totalCategories.length,
      totalItems: totalItems._sum.qtyPurchased || 0,
      totalItemCost: totalItemCost._sum.totalAmount || 0,
      lowInStock,
    };
  } catch (error) {
    console.error("Error fetching stock stats:", error);
    throw new Error("Failed to fetch stock statistics");
  }
}
