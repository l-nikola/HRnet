import { useFormContext, Controller } from "react-hook-form";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { departements } from "../../data/departements";

export default function EmployeeDepartment() {
  const {
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
                {departements.map((departement) => (
                  <MenuItem key={departement.id} value={departement.id}>
                    {departement.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.department && (
            <FormHelperText>{errors.department.message}</FormHelperText>
          )}
        </FormControl>
      </div>
    </section>
  );
}
