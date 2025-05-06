import { getAllProcurements } from "@/server/procurements/getall-procurements-action";
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

export default async function ProcurementsTable() {
  const procurementsData = await getAllProcurements();

  return (
    <div className="h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Procurement Items</h1>
      <Table>
        <TableCaption>A list of all procurement items.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "Item Name",
              "Quantity",
              "Unit Price",
              "Total Price",
              "Requested By",
              "Sent To",
              "Status",
              "Date",
              "Description",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {procurementsData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.unitPrice.toFixed(2)}</TableCell>
              <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
              <TableCell>{item.requestBy}</TableCell>
              <TableCell>{item.sentTo}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "APPROVED"
                      ? "default"
                      : item.status === "PENDING"
                        ? "secondary"
                        : "destructive"
                  }
                  className={
                    item.status === "APPROVED"
                      ? "text-green-500"
                      : item.status === "PENDING"
                        ? "text-orange-500"
                        : "text-red-500"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.data.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const revalidate = 0;
