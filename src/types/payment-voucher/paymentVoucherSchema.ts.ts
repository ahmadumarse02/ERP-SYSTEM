import { z } from "zod";

export const paymentVoucherSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  Date: z.coerce.date(),
  preparedBy: z.string().min(1, "Prepared By is required"),
  sendTo: z.string().min(1, "Send To is required"),
});

export type PaymentVoucherInput = z.infer<typeof paymentVoucherSchema>;
