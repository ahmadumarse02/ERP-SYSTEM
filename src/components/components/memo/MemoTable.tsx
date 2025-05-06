"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllMemos } from "@/server/memo/memo";
import { Memo } from "@prisma/client";
import { Card } from "@/components/ui/card";

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
    <div className="">
      <Card className="p-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Memo Title</TableHead>
              <TableHead>Sent From</TableHead>
              <TableHead>Sent To</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Attachment?</TableHead>
              <TableHead>Memo Type</TableHead>
              <TableHead>Action</TableHead>
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
                  {new Date(memo.date).toLocaleDateString("en-GB")}
                </TableCell>
                <TableCell>
                  {memo.hasAttachment ? <p>Yes</p> : <p>No</p>}
                </TableCell>
                <TableCell>
                  {memo.action === "Received" ? (
                    <span className="flex items-center text-green-500">
                      Received
                    </span>
                  ) : (
                    <span>Sent</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/memos">View more</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export const revalidate = 0;
