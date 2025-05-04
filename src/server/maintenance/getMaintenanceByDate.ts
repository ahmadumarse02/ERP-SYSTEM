"use server";

import prisma from "@/lib/prisma";

export async function getMaintenanceByDate(date: Date) {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const maintenance = await prisma.maintenance.findMany({
      where: {
        scheduledDate: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    return maintenance;
  } catch (error) {
    console.error("Error fetching maintenance:", error);
    throw new Error("Failed to fetch maintenance data");
  }
}
