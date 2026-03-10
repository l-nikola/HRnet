import { useEffect } from "react";
import "./index.css";

export default function Modal({
  title,
  children,
  buttonLabel,
  open,
  onClose,
  closeOnOverlayClick = false,
  closeOnEsc = false,
  preventScroll = false,
  className,
  classNameOverlay,
}) {
  // Close the modal by pressing the “Esc” key.
  useEffect(() => {
    if (!closeOnEsc || !open) return;
    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeOnEsc, onClose, open]);

  // Prevents the page from scrolling when the modal is open
  useEffect(() => {
    if (!preventScroll || !open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [preventScroll, open]);

  // Does not return anything if the modal is not open
  if (!open) return null;

  return (
    <>
      {/* Clickable overlay to close the modal */}
      <div
        className={`modal-overlay ${classNameOverlay ?? ""}`}
        onClick={closeOnOverlayClick && onClose}
      />

      <div className={`modal ${className ?? ""}`}>
        <h1>{title}</h1>
        {children}
        <button className="modal-btn" onClick={onClose}>
          {buttonLabel}
        </button>
      </div>
    </>
  );
}
