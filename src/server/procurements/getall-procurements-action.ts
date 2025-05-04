"use server";

import prisma from "@/lib/prisma";

export async function getAllProcurements() {
  try {
    const procurements = await prisma.procurements.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return procurements;
  } catch (error) {
    console.error("Error fetching procurements:", error);
    throw new Error("Failed to fetch procurements");
  }
}
