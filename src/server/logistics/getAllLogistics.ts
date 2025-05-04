"use server";

import prisma from "@/lib/prisma";

export async function getAllLogistics() {
  try {
    const logistics = await prisma.logisticsRequest.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        purpose: true,
        amount: true,
        requestedBy: true,
        sentTo: true,
        dateFrom: true,
        status: true,
      },
    });
    return logistics;
  } catch (error) {
    console.error("Error fetching logistics:", error);
    throw new Error("Failed to fetch logistics requests");
  }
}
