import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { states } from "../../data/states";

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
              {states.map((state) => (
                <MenuItem key={state.id} value={state.id}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors.state && (
          <FormHelperText>{errors.state.message}</FormHelperText>
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
    </section>
  );
}
