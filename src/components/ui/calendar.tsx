import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DayPicker } from "react-day-picker";

// Define the props expected by the custom navigation component
interface CustomNavigationProps {
  nextMonth?: Date;
  previousMonth?: Date;
  goToMonth: (date: Date) => void;
}

export function CustomNavigation({ nextMonth, previousMonth, goToMonth }: CustomNavigationProps) {
  return (
    <div className="flex justify-between px-2">
      <button
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className="p-2"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className="p-2"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

// Example usage of DayPicker with custom navigation
// <DayPicker
//   // other props
//   components={{
//     Navigation: CustomNavigation,
//   }}
// />
