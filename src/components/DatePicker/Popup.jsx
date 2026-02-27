import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { enUS } from "date-fns/locale";
import "react-day-picker/dist/style.css";

export default function Popup({ value, onChange }) {
  const [month, setMonth] = useState(value ?? new Date());

  const handleSelect = (date) => {
    if (!date) return;
    onChange(date);
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "red",
        zIndex: "10",
        color: "white",
      }}
    >
      <DayPicker
        mode="single"
        showOutsideDays
        month={month}
        onMonthChange={setMonth}
        selected={value}
        onSelect={handleSelect}
        locale={enUS}
        captionLayout="dropdown"
      />
      TODAY BUTTON
    </div>
  );
}
