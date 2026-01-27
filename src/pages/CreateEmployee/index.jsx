import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";

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
          <TextField label="First Name" variant="standard" />
          <TextField label="Last Name" variant="standard" />
          <DatePicker label="Date of Birth" />
          <DatePicker label="Start Date" />

          <span>Address</span>
          <TextField label="Street" variant="standard" />
          <TextField label="City" variant="standard" />

          <FormControl variant="standard" fullWidth>
            <InputLabel id="state-label">State</InputLabel>
            <Select labelId="state-label" value={state} onChange={handleChange}>
              <MenuItem value="Alabama">Alabama</MenuItem>
              <MenuItem value="Alaska">Alaska</MenuItem>
            </Select>
          </FormControl>

          <span>Department</span>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="state-label">Department</InputLabel>
            <Select labelId="state-label" value={state} onChange={handleChange}>
              <MenuItem value="Sale">Sale</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="HumanResources">Human Resources</MenuItem>
              <MenuItem value="Legal">Legal</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Zip Code" type="number" variant="standard" />
          <Button type="submit" variant="outlined">
            Save
          </Button>
        </form>
      </LocalizationProvider>
    </main>
  );
}
