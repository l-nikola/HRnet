import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function EmployeeDepartment({ state, handleChange }) {
  return (
    <section className="employeeDepartment">
      <h3>Department</h3>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="departement-label">Department</InputLabel>
        <Select
          labelId="departement-label"
          value={state}
          onChange={handleChange}
        >
          <MenuItem value="Sale">Sale</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
          <MenuItem value="Engineering">Engineering</MenuItem>
          <MenuItem value="HumanResources">Human Resources</MenuItem>
          <MenuItem value="Legal">Legal</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Zip Code" type="number" variant="standard" />
    </section>
  );
}
