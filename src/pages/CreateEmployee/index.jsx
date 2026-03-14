import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { addEmployee } from "../../store/slices/employeeSlice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Modal from "../../components/Modal";
import EmployeeGeneralInfo from "../../components/Form/EmployeeGeneralInfo";
import EmployeeAddress from "../../components/Form/EmployeeAddress";
import EmployeeDepartment from "../../components/Form/EmployeeDepartment";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

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

  // Dispatches the new employee to the Redux store and opens the confirmation modal
  const onSubmit = (data) => {
    dispatch(
      addEmployee({
        ...data,
        // Converts dates to strings before storing
        dateOfBirth: data.dateOfBirth
          ? dayjs(data.dateOfBirth).format("MM/DD/YYYY")
          : null,
        startDate: data.startDate
          ? dayjs(data.startDate).format("MM/DD/YYYY")
          : null,
      }),
    );
    methods.reset();
    setModalOpen(true);
  };

  return (
    <main className="createEmployee">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* FormProvider shares the form context with all child components */}
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
      {/* Confirmation modal after a successful form submission */}
      <Modal
        title="Employee created"
        buttonLabel="Close"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        preventScroll
        closeOnOverlayClick
        closeOnEsc
        className="createEmployee__modal"
      >
        <p>The employee has been successfully added.</p>
      </Modal>
    </main>
  );
}
