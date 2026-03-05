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

  const resolvedLocale =
    locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : undefined;

  const handleChange = (date) => {
    setValue(date);
    setOpen(false);
  };

  return (
    <div
      className={`dp ${className ?? ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      tabIndex={-1}
    >
      <div className="dp-trigger" onClick={() => setOpen((prev) => !prev)}>
        <span className={`dp-label ${value ? "dp-label-displayed" : ""}`}>
          {label}
        </span>
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
          <div className="dp-backdrop" onClick={() => setOpen(false)} />
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
