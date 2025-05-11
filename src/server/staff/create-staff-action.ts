"use server";

import prisma from "@/lib/prisma";
import {
  staffFormSchema,
  StaffFormValues,
} from "@/types/staff/staffFormSchema";

export async function createStaff(data: StaffFormValues) {
  const result = staffFormSchema.safeParse(data);

  if (!result.success) {
    return { error: "Failed to create staff", details: result.error.format() };
  }

  try {
    await prisma.staff.create({
      data: {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        phone: result.data.phone,
        gender: result.data.gender,
        role: result.data.role,
        designation: result.data.designation,
        officialEmail: result.data.officialEmail || null,
        staffId: result.data.staffId,
        imageUrl: result.data.imageUrl || null,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating staff", error);
    return { error: "Failed to create staff member" };
  }
}
