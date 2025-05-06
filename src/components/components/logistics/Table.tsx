import { getAllLogistics } from "@/server/logistics/getAllLogistics";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function LogisticsTable() {
  const logisticsData = await getAllLogistics();

  return (
    <div className="mt-10 h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">All Logistics Request</h1>
      <Table>
        <TableCaption>A list of all logistics requests.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "Title",
              "Purpose",
              "Amount",
              "Requested By",
              "Sent to",
              "Date",
              "Status",
              "Action",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {logisticsData.map((request, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell className="max-w-[150px] truncate">
                {request.title}
              </TableCell>
              <TableCell className="max-w-[150px] truncate">
                {request.purpose}
              </TableCell>
              <TableCell>
                ₦
                {request.amount.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
              <TableCell>{request.requestedBy}</TableCell>
              <TableCell>{request.sentTo}</TableCell>
              <TableCell>
                {new Date(request.dateFrom).toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    request.status === "APPROVED"
                      ? "default"
                      : request.status === "PENDING"
                        ? "secondary"
                        : "destructive"
                  }
                  className={
                    request.status === "APPROVED"
                      ? "bg-green-100 text-green-800"
                      : request.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }
                >
                  {request.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Link href={`/logistics`} className="flex items-center">
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
