// app/actions/memo.ts
"use server";

import { MemoFormSchema, MemoFormValues } from "@/types/memo/memo";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createMemo(data: MemoFormValues) {
  const validatedData = MemoFormSchema.parse(data);

  try {
    const memo = await prisma.memo.create({
      data: {
        title: validatedData.title,
        sentFrom: validatedData.sentFrom,
        sentTo: validatedData.sentTo,
        action: validatedData.action,
        date: validatedData.date,
        hasAttachment: validatedData.hasAttachment,
        attachmentType: validatedData.attachmentType,
        body: validatedData.body,
      },
    });

    revalidatePath("/memos");
    return { success: true, memo };
  } catch {
    return { success: false, error: "Failed to create memo" };
  }
}

export async function getMemoById(id: string) {
  try {
    const memo = await prisma.memo.findUnique({
      where: { id },
    });
    return memo;
  } catch {
    throw new Error("Failed to fetch memo");
  }
}

export async function getAllMemos() {
  try {
    const memos = await prisma.memo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return memos;
  } catch {
    throw new Error("Failed to fetch memos");
  }
}
