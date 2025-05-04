"use server";

import prisma from "@/lib/prisma";
import { maintenanceSchema, MaintenanceSchema } from "@/types/maintenance/maintenanceSchema";

export async function createMaintenance(data: MaintenanceSchema) {
  const result = maintenanceSchema.safeParse(data);

  if (!result.success) {
    return {
      error: "Validation failed",
      details: result.error.format(),
    };
  }

  try {
    await prisma.maintenance.create({
      data: {
        itemName: result.data.itemName,
        maintenanceType: result.data.maintenanceType,
        frequencyType: result.data.frequencyType,
        recurringOption: result.data.recurringOption,
        scheduledDate: new Date(result.data.scheduledDate),
        status: result.data.status,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating maintenance:", error);
    return { error: "Failed to create maintenance schedule" };
  }
}
