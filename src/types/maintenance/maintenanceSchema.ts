import { z } from "zod";

export const maintenanceSchema = z.object({
  itemName: z.string().min(1, "Item name is required"),
  maintenanceType: z.enum(["Corrective", "Preventive", "Predictive"]),
  frequencyType: z.enum(["one-time", "recurring"]),
  recurringOption: z.string().optional(),
  scheduledDate: z.string().min(1, "Date is required"),
  status: z.enum(["PENDING", "COMPLETED", "OVERDUE"]),
});

export type MaintenanceSchema = z.infer<typeof maintenanceSchema>;
