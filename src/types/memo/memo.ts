// lib/validations/memo.ts
import { z } from "zod";

export const MemoFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  sentFrom: z.string().min(1, "Sender is required"),
  sentTo: z.string().min(1, "Recipient is required"),
  action: z.string().min(1, "Action is required"),
  date: z.date(),
  hasAttachment: z.boolean(),
  attachmentType: z.string().optional(),
  body: z.string().min(1, "Memo body is required"),
});

export type MemoFormValues = z.infer<typeof MemoFormSchema>;
