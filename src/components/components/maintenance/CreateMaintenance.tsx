"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { maintenanceSchema, MaintenanceSchema } from "@/types/maintenance/maintenanceSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { createMaintenance } from "@/server/maintenance/createMaintenance";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitedButton from "@/components/shared/SubmitedButton";

export default function CreateMaintenance() {
  const router = useRouter();
  const form = useForm<MaintenanceSchema>({
    resolver: zodResolver(maintenanceSchema),
    defaultValues: {
      itemName: "",
      maintenanceType: "Predictive",
      frequencyType: "one-time",
      scheduledDate: "",
      status: "PENDING",
    },
  });

  const onSubmit = async (data: MaintenanceSchema) => {
    const result = await createMaintenance(data);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Maintenance scheduled successfully");
      router.push("/maintenance");
    }
  };

  return (
    <div className="shad-md mx-auto space-y-6 rounded-md bg-white px-10 py-8">
      <h1 className="text-2xl font-bold">Schedule Maintenance</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-3 space-y-6 space-x-4"
        >
          {/* Item Name */}
          <FormField
            control={form.control}
            name="itemName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item name</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select item" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="HVAC System">HVAC System</SelectItem>
                    <SelectItem value="Elevator">Elevator</SelectItem>
                    <SelectItem value="Generator">Generator</SelectItem>
                    <SelectItem value="Fire Alarm">Fire Alarm</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maintenanceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maintenance type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Preventive">Preventive</SelectItem>
                    <SelectItem value="Corrective">Corrective</SelectItem>
                    <SelectItem value="Predictive">Predictive</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="frequencyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Frequency</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="recurring">Recurring</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="recurringOption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recurring option</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="scheduledDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild className="w-full">
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(new Date(field.value), "dd/MM/yyyy") : "DD/MM/YYYY"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={(date) => field.onChange(date?.toISOString())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="COMPLETED">Completed</SelectItem>
                    <SelectItem value="OVERDUE">Overdue</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <SubmitedButton text=" Schedule Maintenance" className="bg-gradient w-full" />
        </form>
      </Form>
    </div>
  );
}
