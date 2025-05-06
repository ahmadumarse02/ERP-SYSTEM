"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllMemos } from "@/server/memo/memo";
import { Memo } from "@prisma/client";

export function MemoTable() {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMemos() {
      try {
        const data = await getAllMemos();
        setMemos(data);
      } catch (error) {
        console.error("Error fetching memos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMemos();
  }, []);

  if (loading) {
    return (
      <div>
        <Loader2 className="size-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-[327px] overflow-y-auto rounded-md bg-white p-4 shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Memo Title</TableHead>
            <TableHead>Sent From</TableHead>
            <TableHead>Sent To</TableHead>
            <TableHead>Memo Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memos.map((memo, index) => (
            <TableRow key={memo.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{memo.title}</TableCell>
              <TableCell>{memo.sentFrom}</TableCell>
              <TableCell>{memo.sentTo}</TableCell>
              <TableCell>
                {memo.action === "Received" ? (
                  <span className="flex items-center text-green-500">
                    Received
                  </span>
                ) : (
                  <span>Sent</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const revalidate = 0;
