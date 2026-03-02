import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { enUS } from "date-fns/locale";
import "react-day-picker/dist/style.css";

export default function Popup({ value, onChange, showTodayButton }) {
  const [month, setMonth] = useState(value ?? new Date());

  const handleSelect = (date) => {
    if (!date) return;
    onChange(date);
  };

  const handleClick = () => {
    onChange(new Date());
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

      {showTodayButton && <button onClick={handleClick}>TODAY BUTTON</button>}
    </div>
  );
}
