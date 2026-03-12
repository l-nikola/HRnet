import { useFormContext, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function EmployeeDepartment() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="employeeDepartment">
      <h3>Department</h3>
      <div>
        <FormControl variant="standard" fullWidth error={!!errors.department}>
          <InputLabel id="department-label">Department</InputLabel>
          <Controller
            name="department"
            control={control}
            rules={{ required: "Department is required" }}
            render={({ field }) => (
              <Select {...field} labelId="department-label">
                <MenuItem value="Sale">Sale</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="HumanResources">Human Resources</MenuItem>
                <MenuItem value="Legal">Legal</MenuItem>
              </Select>
            )}
          />
          {errors.department && (
            <FormHelperText>{errors.department.message}</FormHelperText>
          )}
        </FormControl>
        <TextField
          label="Zip Code"
          type="number"
          variant="standard"
          {...register("zipCode", {
            required: "Zip code is required",
            pattern: { value: /^\d{5}$/, message: "Must be 5 digits" },
          })}
          error={!!errors.zipCode}
          helperText={errors.zipCode?.message}
        />
      </div>
    </section>
  );
}
