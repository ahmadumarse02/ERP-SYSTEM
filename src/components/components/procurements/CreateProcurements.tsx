"use client";

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
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { itemSchema, ItemsSchema } from "@/types/procurements/procurements";
import { Card } from "@/components/ui/card";
import SubmitedButton from "@/components/shared/SubmitedButton";
import { createItem } from "@/server/procurements/createProcuments";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateProcurements() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(itemSchema),
    defaultValues: {
      itemName: "",
      quantity: 0,
      data: new Date(),
      unitPrice: 0,
      totalPrice: 0,
      requestBy: "",
      sentTo: "",
      status: "PENDING",
    },
  });

  const onSubmit: SubmitHandler<ItemsSchema> = async (data) => {
    const totalPrice = data.quantity * data.unitPrice;
    const submissionData = { ...data, totalPrice };

    const result = await createItem(submissionData);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Item created successfully");
      router.push("/procurements");
    }
  };

  const quantity = form.watch("quantity");
  const unitPrice = form.watch("unitPrice");
  const totalPrice = quantity * unitPrice;

  useEffect(() => {
    form.setValue("totalPrice", totalPrice);
  }, [quantity, unitPrice, totalPrice, form]);

  return (
    <Card className="mx-4 px-10 py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit as SubmitHandler<ItemsSchema>)}
        >
          <div className="grid w-full grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="itemName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter item name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
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
              name="data"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Select date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
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
                  <FormLabel>Unit Price </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      step="0.01"
                      placeholder="Enter unit price"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Price </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      step="0.01"
                      placeholder="Total price"
                      {...field}
                      value={totalPrice.toFixed(2)}
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requestBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requested By </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter requester name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sentTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sent To </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter recipient" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status </FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING">Pending</SelectItem>
                        <SelectItem value="APPROVED">Approved</SelectItem>
                        <SelectItem value="REJECTED">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitedButton
              text="Create Item"
              className="bg-gradient mt-6 w-full"
            />
          </div>
        </form>
      </Form>
    </Card>
  );
}
