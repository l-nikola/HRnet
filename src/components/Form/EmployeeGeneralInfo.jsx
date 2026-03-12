import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import DatePicker from "../../components/DatePicker";

export default function EmployeeGeneralInfo() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="employeeGeneralInfo">
      <h3>Employee information</h3>

      <TextField
        label="First Name"
        variant="standard"
        {...register("firstName", {
          required: "First name is required",
          minLength: { value: 2, message: "At least 2 characters" },
        })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />
      <TextField
        label="Last Name"
        variant="standard"
        {...register("lastName", {
          required: "Last name is required",
          minLength: { value: 2, message: "At least 2 characters" },
        })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
      />

      <Controller
        name="dateOfBirth"
        control={control}
        rules={{ required: "Date of birth is required" }}
        render={({ field }) => (
          <DatePicker
            value={field.value}
            onChange={field.onChange}
            label="Date of Birth"
            locale="en"
            captionLayout="dropdown"
            error={!!errors.dateOfBirth}
            helperText={errors.dateOfBirth?.message}
          />
        )}
      />

      <Controller
        name="startDate"
        control={control}
        rules={{ required: "Start date is required" }}
        render={({ field }) => (
          <DatePicker
            value={field.value}
            onChange={field.onChange}
            showTodayButton
            label="Start Date"
            locale="en"
            captionLayout="dropdown"
            error={!!errors.startDate}
            helperText={errors.startDate?.message}
          />
        )}
      />
    </section>
  );
}
