import { useState } from "react";
import Popup from "../DatePicker/Popup";
import { Calendar1 } from "lucide-react";
import "./index.css";

export default function DatePicker({
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
      className="datepicker"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      tabIndex={-1}
    >
      <div
        className="datepicker__trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={value ? "datepicker__value" : "datepicker__placeholder"}
        >
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
          <div className="datepicker-backdrop" onClick={() => setOpen(false)} />
          <Popup
            value={value}
            onChange={handleChange}
            showTodayButton={showTodayButton}
            locale={locale}
            captionLayout={captionLayout}
          />
        </>
      )}
    </div>
  );
}
