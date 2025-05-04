/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { format, isSameDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { getMaintenanceByMonth } from "@/server/maintenance/getMaintenanceByMonth";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MaintenanceCalendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [maintenanceEvents, setMaintenanceEvents] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth() + 1;
      const data = await getMaintenanceByMonth(year, month);
      setMaintenanceEvents(data);
    };
    fetchData();
  }, [currentMonth]);

  const hasMaintenance = (date: Date) => {
    return maintenanceEvents.some((event) => isSameDay(new Date(event.scheduledDate), date));
  };

  const dayContent = ({ date }: { date: Date }) => {
    return (
      <div className="relative">
        {format(date, "d")}
        {hasMaintenance(date) && (
          <div className="absolute -bottom-1.5 left-1/2 size-8 -translate-x-1/2 transform rounded-full bg-blue-500/30"></div>
        )}
      </div>
    );
  };

  return (
    <Card className="flex justify-between gap-4 px-10 py-10">
      <Calendar
        mode="single"
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="h-[400px] w-[400px] rounded-lg border-none bg-blue-50 p-4"
        components={{
          DayContent: dayContent,
        }}
        classNames={{
          months: "flex flex-col h-full",
          month: "space-y-2 flex flex-col h-full",
          caption: "flex justify-center py-2 relative items-center",
          caption_label: "text-lg font-medium",
          nav: "flex items-center",
          nav_button: "h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-2",
          nav_button_next: "absolute right-2",
          table: "w-full flex-1 border-collapse",
          head_row: "flex",
          head_cell: "text-muted-foreground rounded-md w-12 font-normal text-sm",
          row: "flex w-full mt-1",
          cell: "h-12 w-12 text-center p-0 relative [&:has([aria-selected])]:bg-accent",
          day: "h-12 w-12 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-sm",
          day_today: "bg-accent text-accent-foreground rounded-sm",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
      />
      <Separator orientation="vertical" />
    </Card>
  );
}
