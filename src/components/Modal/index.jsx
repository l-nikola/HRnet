import "./index.css";

export default function Modal({ title, children, open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <h1>{title}</h1>
        <p>{children}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}
