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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  paymentVoucherSchema,
  PaymentVoucherInput,
} from "@/types/payment-voucher/paymentVoucherSchema.ts";
import { Card } from "@/components/ui/card";
import SubmitedButton from "@/components/shared/SubmitedButton";
import { createPaymentVocture } from "@/server/payment-voucher/createPayment";

export default function CreatePaymenyVoucher() {
  const router = useRouter();

  const form = useForm<PaymentVoucherInput>({
    resolver: zodResolver(paymentVoucherSchema),
    defaultValues: {
      subject: "",
      Date: new Date(),
      sendTo: "",
      preparedBy: "",
    },
  });

  const onSubmit = async (data: PaymentVoucherInput) => {
    const result = await createPaymentVocture(data);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Staff member created successfully");
      router.push("/staff");
    }
  };

  return (
    <Card className="mx-10 px-20 py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid w-full grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Enter Date"
                      {...field}
                      value={
                        field.value
                          ? new Date(field.value).toISOString().split("T")[0]
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sendTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    send to
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Send To" className="mt-1" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preparedBy"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium text-gray-700">
                    preparedBy
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Prepared By"
                      className="mt-1"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitedButton text="Create Vocture" className="bg-gradient" />
          </div>
        </form>
      </Form>
    </Card>
  );
}
