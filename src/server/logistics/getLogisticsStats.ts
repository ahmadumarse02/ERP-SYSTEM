"use server";

import prisma from "@/lib/prisma";

export async function getLogisticsStats() {
  try {
    const totalRequests = await prisma.logisticsRequest.count();

    const totalCost = await prisma.logisticsRequest.aggregate({
      _sum: {
        amount: true,
      },
    });

    const pendingRequests = await prisma.logisticsRequest.count({
      where: {
        status: "PENDING",
      },
    });

    const approvedRequests = await prisma.logisticsRequest.count({
      where: {
        status: "APPROVED",
      },
    });

    const comparisonData = {
      requestsChange: 50,
      costChange: 2,
    };

    return {
      totalRequests,
      totalCost: totalCost._sum.amount || 0,
      pendingRequests,
      approvedRequests,
      comparisonData,
    };
  } catch (error) {
    console.error("Error fetching logistics stats:", error);
    throw new Error("Failed to fetch logistics statistics");
  }
}
