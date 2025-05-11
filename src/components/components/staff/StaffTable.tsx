"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


interface StaffTableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData: any[];
}


export default function StaffTable({initialData}: StaffTableProps) {

  return (
    <div className="h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">All Staff</h1>
      <Table>
        <TableCaption>A list of all staff members.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "First Name",
              "Last Name",
              "Gender",
              "Staff ID",
              "Phone",
              "Role",
              "Designation",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData.map((staff, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{staff.firstName}</TableCell>
              <TableCell>{staff.lastName}</TableCell>
              <TableCell>{staff.gender}</TableCell>
              <TableCell>{staff.staffId}</TableCell>
              <TableCell>{staff.phone}</TableCell>
              <TableCell>{staff.role}</TableCell>
              <TableCell>{staff.designation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}