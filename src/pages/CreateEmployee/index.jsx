import { useState } from "react";
import { useDispatch } from "react-redux";
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleDateChange = (field) => (date) => {
    setFormData((prev) => ({ ...prev, [field]: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addEmployee({
        ...formData,
        dateOfBirth: formData.dateOfBirth
          ? dayjs(formData.dateOfBirth).format("MM-DD-YYYY")
          : null,
        startDate: formData.startDate
          ? dayjs(formData.startDate).format("MM-DD-YYYY")
          : null,
      }),
    );
  };

  return (
    <main className="createEmployee">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
          <EmployeeGeneralInfo
            firstName={formData.firstName}
            lastName={formData.lastName}
            dateOfBirth={formData.dateOfBirth}
            startDate={formData.startDate}
            onChangeField={handleChange}
            onDateChange={handleDateChange}
          />
          <EmployeeAddress
            street={formData.street}
            city={formData.city}
            state={formData.state}
            onChangeField={handleChange}
          />
          <EmployeeDepartment
            department={formData.department}
            zipCode={formData.zipCode}
            onChangeField={handleChange}
          />

          <Button type="submit" variant="outlined">
            Save
          </Button>
        </form>
      </LocalizationProvider>
    </main>
  );
}
