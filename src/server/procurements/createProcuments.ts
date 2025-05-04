"use server";

import { itemSchema, ItemsSchema } from "@/types/procurements/procurements";
import prisma from "@/lib/prisma";

// Server Action
export async function createItem(data: ItemsSchema) {
  const result = itemSchema.safeParse(data);

  if (!result.success) {
    console.error(result.error.format());
    return { error: "Failed to create item", details: result.error.format() };
  }

  try {
    await prisma.procurements.create({
      data: {
        itemName: result.data.itemName,
        quantity: result.data.quantity,
        data: result.data.data,
        unitPrice: result.data.unitPrice,
        totalPrice: result.data.totalPrice,
        requestBy: result.data.requestBy,
        sentTo: result.data.sentTo,
        status: result.data.status,
      },
    });
  } catch (error) {
    console.error("Error creating item:", error);
    return { error: "Failed to create item" };
  }
}
