import { useEffect } from "react";
import "./index.css";

export default function Modal({
  title,
  children,
  open,
  onClose,
  closeOnOverlayClick = false,
  closeOnEsc = false,
}) {
  useEffect(() => {
    if (!closeOnEsc) return;
    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeOnEsc, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" onClick={closeOnOverlayClick && onClose} />

      <div className="modal">
        <h1>{title}</h1>
        <p>{children}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}
