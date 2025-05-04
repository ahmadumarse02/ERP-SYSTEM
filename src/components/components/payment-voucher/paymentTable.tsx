"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPaymentVoucher } from "@/server/payment-voucher/createPayment";
import { useEffect, useState } from "react";
import { PaymentVoucher } from "@prisma/client";
import { format } from "date-fns";

export function PaymentVoucherTable() {
  const [vouchers, setVouchers] = useState<PaymentVoucher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVouchers() {
      try {
        const data = await getPaymentVoucher();
        if (data) {
          setVouchers(data);
        } else {
          setVouchers([]);
          setError("No data received from server");
        }
      } catch (error) {
        console.error("Error fetching payment vouchers:", error);
        setError("Failed to load payment vouchers");
        setVouchers([]);
      } finally {
        setLoading(false);
      }
    }
    fetchVouchers();
  }, []);

  if (loading) {
    return <div>Loading payment vouchers...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="mt-10 rounded-lg border bg-white p-10 shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Prepare By</TableHead>
            <TableHead>Sent To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vouchers.length > 0 ? (
            vouchers.map((voucher, index) => (
              <TableRow key={voucher.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{voucher.subject}</TableCell>
                <TableCell>{format(new Date(voucher.Date), "dd/MM/yyyy")}</TableCell>
                <TableCell>{voucher.preparedBy}</TableCell>
                <TableCell>{voucher.sendTo}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No payment vouchers found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
