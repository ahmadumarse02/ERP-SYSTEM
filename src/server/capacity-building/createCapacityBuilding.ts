"use server";

import prisma from "@/lib/prisma";
import {
  CapacityBuildingValues,
  capacityBuildingSchema,
} from "@/types/capacity-building/capacityBuilding";

export async function createTraining(data: CapacityBuildingValues) {
  const result = capacityBuildingSchema.safeParse(data);

  if (!result.success) {
    console.error(result.error.format());
    return {
      error: "Validation failed",
      details: result.error.format(),
      message: "Please check your inputs",
    };
  }

  try {
    await prisma.capacityBuilding.create({
      data: {
        description: result.data.description,
        trainingDate: result.data.trainingDate,
        type: result.data.type,
        mode: result.data.mode,
        duration: result.data.duration,
        staffIds: result.data.staffIds,
        status: result.data.status,
      },
    });

    return { success: true, message: "Training created successfully" };
  } catch (error) {
    console.error("Error creating staff:", error);
    return { error: "Failed to create staff member", message: "Failed to create training" };
  }
}
