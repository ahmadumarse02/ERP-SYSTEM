import { getAllStaffData } from "@/server/staff/getall-staff-action";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function StaffTable() {
  const staffData = await getAllStaffData();

  return (
    <div className="h-[327px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">All Staff</h1>
      <Table>
        <TableCaption>A list of all staff members.</TableCaption>
        <TableHeader>
          <TableRow>
            {["S/N", "First Name", "Role", "Designation"].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {staffData.map((staff, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{staff.firstName}</TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>{staff.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const revalidate = 0;