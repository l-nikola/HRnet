import { useState } from "react";
import Popup from "../DatePicker/Popup";
import { Calendar1 } from "lucide-react";
import "./index.css";

export default function DatePicker({
  value,
  onChange,
  className,
  popupClassName,
  showTodayButton,
  label,
  locale,
  captionLayout,
  error,
  helperText,
}) {
  const [open, setOpen] = useState(false);

  // Adjusts the locale used for displaying the date
  const resolvedLocale =
    locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : undefined;

  // Called when the user selects a date in the calendar popup.
  // - Updates the value
  // - Closes the popup
  const handleChange = (date) => {
    onChange(date);
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
      <div
        className={`dp-trigger ${error ? "dp-trigger--error" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Displays the label above when a date is selected */}
        <span
          className={`dp-label ${value ? "dp-label-displayed" : ""} ${error ? "dp-label--error" : ""}`}
        >
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
        <Calendar1 size={22} color={error ? "#d32f2f" : "#71756A"} />
      </div>

      {/* Error message */}
      {error && helperText && (
        <span className="dp-error-text">{helperText}</span>
      )}

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
