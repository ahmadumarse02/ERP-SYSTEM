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
import Image from "next/image";
import { getAllStockItems } from "@/server/stocks-and-inventory/getAllStock";

function getStatusBadge(status: string, inStock: number) {
  let badgeVariant = "outline";
  let badgeClass = "";
  let displayStatus = status;

  if (inStock === 0) {
    displayStatus = "OUT_OF_STOCK";
  } else if (inStock < 10) {
    displayStatus = "LOW_STOCK";
  }

  switch (displayStatus) {
    case "IN_STOCK":
      badgeVariant = "default";
      badgeClass = "bg-green-100 text-green-800";
      break;
    case "LOW_STOCK":
      badgeVariant = "secondary";
      badgeClass = "bg-yellow-100 text-yellow-800";
      break;
    case "OUT_OF_STOCK":
      badgeVariant = "destructive";
      badgeClass = "bg-red-100 text-red-800";
      break;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Badge variant={badgeVariant as any} className={badgeClass}>
      {displayStatus.replace("_", " ")}
    </Badge>
  );
}

export default async function StockTable() {
  const stockItems = await getAllStockItems();

  return (
    <div className="h-[650px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Stock List</h1>
      <Table>
        <TableCaption>A list of all stock items.</TableCaption>
        <TableHeader>
          <TableRow>
            {[
              "S/N",
              "Image",
              "Product Name",
              "Product ID",
              "Category",
              "QTY Purchased",
              "Unit Price",
              "Total Amount",
              "In-Stock",
              "Supplier",
              "Status",
            ].map((header, i) => (
              <TableHead key={i}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {stockItems.map((item, i: number) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.productName}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-200">
                    <span className="text-xs">No Image</span>
                  </div>
                )}
              </TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.productId}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.qtyPurchased}pcs</TableCell>
              <TableCell>¥{item.unitPrice.toFixed(2)}</TableCell>
              <TableCell>¥{item.totalAmount.toFixed(2)}</TableCell>
              <TableCell>{item.inStock}pcs</TableCell>
              <TableCell>{item.supplier}</TableCell>
              <TableCell>{getStatusBadge(item.status, item.inStock)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
