"use server";

import prisma from "@/lib/prisma";

import { circularSchema, CircularSchema } from "@/types/circulars/circularsSchema";

export async function CreateCircular(data: CircularSchema) {
  const result = circularSchema.safeParse(data);

  if (!result.success) {
    return { error: "Failed to create circulars", details: result.error.format() };
  }

  try {
    await prisma.circulars.create({
      data: {
        subject: result.data.subject,
        preparedBy: result.data.preparedBy,
        Date: result.data.Date,
        sendTo: result.data.sendTo,
        message: result.data.message,
      },
    });
  } catch (error) {
    console.error("Error creating staff", error);
    return { error: "Failed to create circulars" };
  }
}
