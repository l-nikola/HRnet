import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function EmployeeGeneralInfo() {
  return (
    <section className="employeeGeneralInfo">
      <h3>Employee information</h3>
      <TextField label="First Name" variant="standard" />
      <TextField label="Last Name" variant="standard" />
      <DatePicker label="Date of Birth" />
      <DatePicker label="Start Date" />
    </section>
  );
}
