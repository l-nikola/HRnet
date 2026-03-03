import { useState } from "react";
import Popup from "../DatePicker/Popup";
import { Calendar1 } from "lucide-react";

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
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      tabIndex={-1}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "6px 10px",
          cursor: "pointer",
          gap: "8px",
          backgroundColor: "transparent",
        }}
      >
        <span style={{ color: value ? "#000" : "#aaa", minWidth: "100px" }}>
          {value
            ? value.toLocaleDateString(resolvedLocale, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
            : label}
        </span>
        <Calendar1 size={18} color="#888" />
      </div>

      {open && (
        <Popup
          value={value}
          onChange={handleChange}
          showTodayButton={showTodayButton}
          locale={locale}
          captionLayout={captionLayout}
        />
      )}
    </div>
  );
}
