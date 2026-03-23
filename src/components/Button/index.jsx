import { Link } from "react-router-dom";

export default function Button({ mode }) {
  // Renders a different link depending on the current page
  return mode === "createEmployee" ? (
    <Link to="/" className="button">
      Create employee
    </Link>
  ) : mode === "currentEmployee" ? (
    <Link to="/current-employee" className="button">
      View current employees
    </Link>
  ) : null;
}
