import { useState } from "react";
import TextField from "@mui/material/TextField";
import DatePicker from "../../components/DatePicker";

export default function EmployeeGeneralInfo() {
  const [date, setDate] = useState();

  return (
    <section className="employeeGeneralInfo">
      <h3>Employee information</h3>
      <TextField label="First Name" variant="standard" />
      <TextField label="Last Name" variant="standard" />

      <DatePicker
        value={date}
        onChange={setDate}
        label="Date of Birth"
        locale="en"
        captionLayout="dropdown"
      />

      <DatePicker
        value={date}
        onChange={setDate}
        showTodayButton
        label="Start Date"
        locale="en"
        captionLayout="dropdown"
      />
    </section>
  );
}
