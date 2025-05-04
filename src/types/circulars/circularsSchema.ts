import { z } from "zod";

export const circularSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  Date: z.coerce.date(),
  preparedBy: z.string().min(1, "Prepared By is required"),
  sendTo: z.string().min(1, "Send To is required"),
  message: z.string().min(10),
});

export type CircularSchema = z.infer<typeof circularSchema>;
