"use server";

import prisma from "@/lib/prisma";

export async function getAllCirculars() {
  try {
    const circulars = await prisma.circulars.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return circulars;
  } catch (error) {
    console.error("Error fetching circulars:", error);
    throw new Error("Failed to fetch circulars");
  }
}
