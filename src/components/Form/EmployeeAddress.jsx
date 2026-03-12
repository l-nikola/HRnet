import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

export default function EmployeeAddress() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="employeeAddress">
      <h3>Address</h3>
      <TextField
        label="Street"
        variant="standard"
        {...register("street", { required: "Street is required" })}
        error={!!errors.street}
        helperText={errors.street?.message}
      />
      <TextField
        label="City"
        variant="standard"
        {...register("city", { required: "City is required" })}
        error={!!errors.city}
        helperText={errors.city?.message}
      />
      <FormControl variant="standard" fullWidth error={!!errors.state}>
        <InputLabel id="state-label">State</InputLabel>
        <Controller
          name="state"
          control={control}
          rules={{ required: "State is required" }}
          render={({ field }) => (
            <Select {...field} labelId="state-label">
              <MenuItem value="Alabama">Alabama</MenuItem>
              <MenuItem value="Alaska">Alaska</MenuItem>
            </Select>
          )}
        />
        {errors.state && (
          <FormHelperText>{errors.state.message}</FormHelperText>
        )}
      </FormControl>
    </section>
  );
}
