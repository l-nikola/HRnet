import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import EmployeeGeneralInfo from "../../components/Form/EmployeeGeneralInfo";
import EmployeeAddress from "../../components/Form/EmployeeAddress";
import EmployeeDepartment from "../../components/Form/EmployeeDepartment";

export default function CreateEmployee() {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form envoyé");
  };

  return (
    <main className="createEmployee">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
          <EmployeeGeneralInfo />
          <EmployeeAddress state={state} handleChange={handleChange} />
          <EmployeeDepartment state={state} handleChange={handleChange} />

          <Button type="submit" variant="outlined">
            Save
          </Button>
        </form>
      </LocalizationProvider>
    </main>
  );
}
