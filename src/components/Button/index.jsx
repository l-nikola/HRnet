export default function Button({ mode }) {
  // Renders a different link depending on the current page
  return mode === "createEmployee" ? (
    <a href="/" className="button">
      Create employee
    </a>
  ) : mode === "currentEmployee" ? (
    <a href="/current-employee" className="button">
      View current employees
    </a>
  ) : null;
}
