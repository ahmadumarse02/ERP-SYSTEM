import prisma from "@/lib/prisma";
import { staffFormSchema } from "@/types/staff/staffFormSchema";
import { z } from "zod";

export type StaffData = z.infer<typeof staffFormSchema>;

export async function getAllStaffData(): Promise<StaffData[]> {
  const staff = await prisma.staff.findMany();

  return staff.map((s) => ({
    firstName: s.firstName,
    lastName: s.lastName,
    email: s.email,
    phone: s.phone,
    gender: s.gender as StaffData["gender"],
    role: s.role as StaffData["role"],
    designation: s.designation as StaffData["designation"],
    imageUrl: s.imageUrl || "",
    officialEmail: s.officialEmail || undefined,
    staffId: s.staffId || undefined,
  }));
}
