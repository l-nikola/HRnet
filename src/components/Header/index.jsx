import Button from "../Button";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  // Gets the current URL path to adapt the header content
  const location = useLocation();
  const path = location.pathname;

  return (
    <header>
      <Link to="/">
        <img src="/Logo.svg" alt="Logo HRnet" loading="eager" />
        <h1>HRnet</h1>
      </Link>
      {/* Displays a different title and button depending on the current page */}
      <h2>
        {path === "/"
          ? "Create Employee"
          : path === "/current-employee"
            ? "Current Employees"
            : ""}
      </h2>
      <Button
        mode={
          path === "/"
            ? "currentEmployee"
            : path === "/current-employee"
              ? "createEmployee"
              : ""
        }
      />
    </header>
  );
}
