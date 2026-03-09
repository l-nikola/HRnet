import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { enUS, fr } from "date-fns/locale";
import "react-day-picker/dist/style.css";

export default function Popup({
  popupClassName,
  value,
  onChange,
  showTodayButton,
  locale,
  captionLayout = "label",
}) {
  const [month, setMonth] = useState(value ?? new Date());

  // Adjusts the locale used for displaying the date
  const resolvedLocale =
    locale === "fr" ? fr : locale === "en" ? enUS : undefined;

  // Called when the user selects a date in the calendar popup.
  const handleSelect = (date) => {
    if (!date) return;
    onChange(date);
  };

  // Allows to directly select today's date via the "Today / Aujourd'hui" button.
  const handleClick = () => {
    onChange(new Date());
  };

  return (
    <div className={`dp-popup ${popupClassName ?? ""}`}>
      {/* Calendar react-day-picker */}
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

      {/* Optional button allowing to select today's date */}
      {showTodayButton && (
        <button onClick={handleClick} className="dp-popup-today-btn">
          {locale === "fr" ? "Aujourd'hui" : "Today"}
        </button>
      )}
    </div>
  );
}
