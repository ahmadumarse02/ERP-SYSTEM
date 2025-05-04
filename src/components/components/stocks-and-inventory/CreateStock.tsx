"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stockSchema, StockValues } from "@/types/stocks-and-inventory/stockSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createStockItem } from "@/server/stocks-and-inventory/createStock";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ImageUploader from "@/components/shared/image";
import SubmitedButton from "@/components/shared/SubmitedButton";

export default function CreateStockForm() {
  const router = useRouter();

  const form = useForm<StockValues>({
    resolver: zodResolver(stockSchema),
    defaultValues: {
      productName: "",
      productId: "",
      category: "",
      qtyPurchased: 0,
      unitPrice: 0,
      totalAmount: 0,
      inStock: 0,
      supplier: "",
      status: "IN_STOCK",
    },
  });

  const qtyPurchased = form.watch("qtyPurchased");
  const unitPrice = form.watch("unitPrice");
  const inStock = form.watch("inStock");

  useEffect(() => {
    const total = qtyPurchased * unitPrice;
    form.setValue("totalAmount", total);
  }, [qtyPurchased, unitPrice, form]);

  useEffect(() => {
    let status: "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK" = "IN_STOCK";
    if (inStock === 0) {
      status = "OUT_OF_STOCK";
    } else if (inStock < 10) {
      status = "LOW_STOCK";
    }
    form.setValue("status", status);
  }, [inStock, form]);

  const onSubmit = async (data: StockValues) => {
    const result = await createStockItem(data);

    if (result?.error) {
      toast.error(result.message || "Failed to create stock item");
    } else {
      toast.success("Stock item created successfully");
      router.push("/stock");
    }
  };

  return (
    <div className="mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Add New Item</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2">
          <div className="w-[331px] border py-8 px-10 rounded-lg">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-center">Profile Image</FormLabel>
                  <FormControl>
                    <ImageUploader value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitedButton text="Create staff" className="bg-gradient w-full" />
          </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Select category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <FormField
              control={form.control}
              name="unitPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="supplier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Supplier</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter supplier name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="qtyPurchased"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>QTY purchased</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inStock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>In-Stock</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter quantity"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="totalAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total amount</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Amount" {...field} readOnly />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
