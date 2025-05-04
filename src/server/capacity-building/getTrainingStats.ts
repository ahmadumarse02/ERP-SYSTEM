"use server";

import prisma from "@/lib/prisma";

export async function getTrainingStats() {
  try {
    const totalRequests = await prisma.capacityBuilding.count();

    const allTrainings = await prisma.capacityBuilding.findMany({
      select: { staffIds: true },
    });
    const totalStaffTrained = allTrainings.reduce((acc, training) => {
      return acc + training.staffIds.split(",").length;
    }, 0);

    const totalCompleted = await prisma.capacityBuilding.count({
      where: { status: "completed" },
    });

    const totalStaff = await prisma.staff.count();
    const trainingRate = totalStaff > 0 ? Math.round((totalStaffTrained / totalStaff) * 100) : 0;

    return {
      totalRequests,
      totalStaffTrained,
      totalCompleted,
      trainingRate: `${trainingRate}%`,
    };
  } catch (error) {
    console.error("Error fetching training stats:", error);
    return {
      totalRequests: 0,
      totalStaffTrained: 0,
      totalCompleted: 0,
      trainingRate: "0%",
    };
  }
}
