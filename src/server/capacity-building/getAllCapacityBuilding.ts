"use server";

import prisma from "@/lib/prisma";

export async function getAllCapacityBuilding() {
  try {
    const procurements = await prisma.capacityBuilding.findMany({
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
