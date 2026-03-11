import TextField from "@mui/material/TextField";
import DatePicker from "../../components/DatePicker";

export default function EmployeeGeneralInfo({
  firstName,
  lastName,
  dateOfBirth,
  startDate,
  onChangeField,
  onDateChange,
}) {
  return (
    <section className="employeeGeneralInfo">
      <h3>Employee information</h3>
      <TextField
        label="First Name"
        variant="standard"
        value={firstName}
        onChange={onChangeField("firstName")}
      />
      <TextField
        label="Last Name"
        variant="standard"
        value={lastName}
        onChange={onChangeField("lastName")}
      />
      <DatePicker
        value={dateOfBirth}
        onChange={onDateChange("dateOfBirth")}
        label="Date of Birth"
        locale="en"
        captionLayout="dropdown"
      />

      <DatePicker
        value={startDate}
        onChange={onDateChange("startDate")}
        showTodayButton
        label="Start Date"
        locale="en"
        captionLayout="dropdown"
      />
    </section>
  );
}
