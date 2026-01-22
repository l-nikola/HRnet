import Button from "../Button";
import Logo from "../../../public/Logo.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header>
      <a href="/">
        <img src={Logo} alt="Logo HRnet" />
        <h1>HRnet</h1>
      </a>
      <h2>{path === "/" ? "Create Employee" : "Current Employees"}</h2>
      <Button mode={path === "/" ? "currentEmployee" : "createEmployee"} />
    </header>
  );
}
