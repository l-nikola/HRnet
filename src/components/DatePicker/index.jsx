import { useState } from "react";
import Popup from "../DatePicker/Popup";
import { Calendar1 } from "lucide-react";
import "./index.css";

export default function DatePicker({
  className,
  popupClassName,
  showTodayButton,
  label,
  locale,
  captionLayout,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  // Adjusts the locale used for displaying the date
  const resolvedLocale =
    locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : undefined;

  // Called when the user selects a date in the calendar popup.
  // - Updates the value
  // - Closes the popup
  const handleChange = (date) => {
    setValue(date);
    setOpen(false);
  };

  return (
    <div
      className={`dp ${className ?? ""}`}
      // Close the popup when clicking outside the component
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      tabIndex={-1}
    >
      <div className="dp-trigger" onClick={() => setOpen((prev) => !prev)}>
        {/* Displays the label above when a date is selected */}
        <span className={`dp-label ${value ? "dp-label-displayed" : ""}`}>
          {label}
        </span>

        {/* Date or placeholder if no date is selected */}
        <span className={value ? "dp-value" : "dp-placeholder"}>
          {value
            ? value.toLocaleDateString(resolvedLocale, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
            : label}
        </span>
        <Calendar1 size={22} color="#71756A" />
      </div>

      {open && (
        <>
          {/* Backdrop permitting to close the popup on click */}
          <div className="dp-backdrop" onClick={() => setOpen(false)} />

          {/* Popup containing the calendar */}
          <Popup
            value={value}
            onChange={handleChange}
            showTodayButton={showTodayButton}
            locale={locale}
            captionLayout={captionLayout}
            popupClassName={popupClassName}
          />
        </>
      )}
    </div>
  );
}
