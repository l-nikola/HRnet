import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addEmployee } from "../../store/slices/employeeSlice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import EmployeeGeneralInfo from "../../components/Form/EmployeeGeneralInfo";
import EmployeeAddress from "../../components/Form/EmployeeAddress";
import EmployeeDepartment from "../../components/Form/EmployeeDepartment";

export default function CreateEmployee() {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(
      addEmployee({
        ...data,
        dateOfBirth: data.dateOfBirth
          ? dayjs(data.dateOfBirth).format("MM-DD-YYYY")
          : null,
        startDate: data.startDate
          ? dayjs(data.startDate).format("MM-DD-YYYY")
          : null,
      }),
    );
  };

  return (
    <main className="createEmployee">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <EmployeeGeneralInfo />
            <EmployeeAddress />
            <EmployeeDepartment />
            <Button type="submit" variant="outlined">
              Save
            </Button>
          </form>
        </FormProvider>
      </LocalizationProvider>
    </main>
  );
}
