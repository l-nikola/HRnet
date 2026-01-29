import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function EmployeeAddress({ state, handleChange }) {
  return (
    <section className="employeeAddress">
      <h3>Address</h3>

      <TextField label="Street" variant="standard" />
      <TextField label="City" variant="standard" />

      <FormControl variant="standard" fullWidth>
        <InputLabel id="state-label">State</InputLabel>
        <Select labelId="state-label" value={state} onChange={handleChange}>
          <MenuItem value="Alabama">Alabama</MenuItem>
          <MenuItem value="Alaska">Alaska</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}
