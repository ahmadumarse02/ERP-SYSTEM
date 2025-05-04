"use server";

import prisma from "@/lib/prisma";

export async function getMaintenanceStats() {
  try {
    const [scheduled, completed, pending, overdue] = await Promise.all([
      prisma.maintenance.count(),
      prisma.maintenance.count({ where: { status: "COMPLETED" } }),
      prisma.maintenance.count({ where: { status: "PENDING" } }),
      prisma.maintenance.count({ where: { status: "OVERDUE" } }),
    ]);

    const overloaders = await prisma.maintenance.findMany({
      where: {},
      select: {
        id: true,
        itemName: true,
        status: true,
      },
      take: 10,
    });

    const comparison = {
      scheduled: 2,
      completed: 2,
      pending: 2,
      overdue: 2,
    };

    return {
      counts: {
        scheduled,
        completed,
        pending,
        overdue,
      },
      comparison,
      overloaders,
    };
  } catch (error) {
    console.error("Error fetching maintenance stats:", error);
    throw new Error("Failed to fetch maintenance statistics");
  }
}
