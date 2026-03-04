import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { enUS, fr } from "date-fns/locale";
import "react-day-picker/dist/style.css";

export default function Popup({
  value,
  onChange,
  showTodayButton,
  locale,
  captionLayout = "label",
}) {
  const [month, setMonth] = useState(value ?? new Date());

  const resolvedLocale =
    locale === "fr" ? fr : locale === "en" ? enUS : undefined;

  const handleSelect = (date) => {
    if (!date) return;
    onChange(date);
  };

  const handleClick = () => {
    onChange(new Date());
  };

  return (
    <div className="datepicker-popup">
      <DayPicker
        mode="single"
        showOutsideDays
        month={month}
        onMonthChange={setMonth}
        selected={value}
        onSelect={handleSelect}
        locale={resolvedLocale}
        captionLayout={captionLayout}
      />
      {showTodayButton && (
        <button
          onClick={handleClick}
          className="datepicker-popup__today-button"
        >
          TODAY BUTTON
        </button>
      )}
    </div>
  );
}
