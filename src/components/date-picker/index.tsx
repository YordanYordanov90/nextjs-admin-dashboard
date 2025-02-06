"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  date?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
}

export function DatePicker({
  date,
  onChange,
  placeholder,
  disabled,
  name = "Select date...",
  label,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date
  );

  const handleClear = () => {
    setSelectedDate(undefined);
    onChange?.(undefined);
  };

  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    onChange?.(today);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            disabled={disabled}
            size={"sm"}
            className={cn(
              "w-[200px] justify-start text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? format(selectedDate, "PPP") : name}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              onChange?.(date);
            }}
            initialFocus
          />
          <div className="flex justify-end gap-2 p-3 border-t">
            <Button variant="secondary" size="sm" onClick={handleClear}>
              Clear
            </Button>
            <Button size="sm" onClick={handleToday}>
              Today
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
