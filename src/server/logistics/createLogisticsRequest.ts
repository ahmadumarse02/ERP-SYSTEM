"use server";

import prisma from "@/lib/prisma";
import {
  logisticsRequestSchema,
  LogisticsRequestSchema,
} from "@/types/logistics/logisticsSchema";

export async function createLogisticsRequest(data: LogisticsRequestSchema) {
  const result = logisticsRequestSchema.safeParse(data);

  if (!result.success) {
    return {
      error: "Validation failed",
      details: result.error.format(),
    };
  }

  try {
    await prisma.logisticsRequest.create({
      data: {
        title: result.data.title,
        requestedBy: result.data.requestedBy,
        dateFrom: new Date(result.data.dateFrom),
        dateTo: new Date(result.data.dateTo),
        purpose: result.data.purpose,
        sentTo: result.data.sentTo,
        amount: result.data.amount,
        status: result.data.status,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating logistics request:", error);
    return { error: "Failed to create logistics request" };
  }
}
