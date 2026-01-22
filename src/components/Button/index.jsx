export default function Button({ mode }) {
  return mode === "createEmployee" ? (
    <a href="/" className="button">
      Create employee
    </a>
  ) : (
    <a href="/current-employee" className="button">
      View current employees
    </a>
  );
}
