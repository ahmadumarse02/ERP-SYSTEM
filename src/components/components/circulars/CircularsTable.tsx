import { getAllCirculars } from "@/server/circulars/getAllCirculars";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function CircularsTable() {
  const circularsData = await getAllCirculars();

  return (
    <div className="h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Circulars</h1>
      <Table>
        <TableCaption>A list of all circulars.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "Circular Title",
              "Sent From",
              "Sent To",
              "Date",
              "Action",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {circularsData.map((circular, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {circular.subject}
              </TableCell>
              <TableCell>{circular.preparedBy}</TableCell>
              <TableCell>{circular.sendTo}</TableCell>
              <TableCell>
                {new Date(circular.Date).toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell>
                <Link href="/circulars" className="flex items-center">
                  View more
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const revalidate = 0;
