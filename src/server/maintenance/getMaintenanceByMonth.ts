"use server";

import prisma from "@/lib/prisma";

export async function getMaintenanceByMonth(year: number, month: number) {
  try {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const maintenance = await prisma.maintenance.findMany({
      where: {
        scheduledDate: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        scheduledDate: "asc",
      },
    });

    return maintenance;
  } catch (error) {
    console.error("Error fetching maintenance:", error);
    throw new Error("Failed to fetch maintenance data");
  }
}
