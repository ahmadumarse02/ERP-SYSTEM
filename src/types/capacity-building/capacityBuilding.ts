import { z } from "zod";

export const capacityBuildingSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  trainingDate: z.date(),
  type: z.string().min(1, "Please select a training type"),
  mode: z.string().min(1, "Please select a training mode"),
  duration: z.string().min(1, "Please select duration"),
  staffIds: z.string().min(1, "Select at least one staff member"),
  status: z.enum(["TODO", "IN_PROGRESS", "COMPLETED", "CANCELLED"]),
});
export type CapacityBuildingValues = z.infer<typeof capacityBuildingSchema>;
