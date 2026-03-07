import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import EmployeeGeneralInfo from "../../components/Form/EmployeeGeneralInfo";
import EmployeeAddress from "../../components/Form/EmployeeAddress";
import EmployeeDepartment from "../../components/Form/EmployeeDepartment";
import DatePicker from "../../components/DatePicker";
import Modal from "../../components/Modal";

export default function CreateEmployee() {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form envoyé");
  };

  const [date, setDate] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="createEmployee">
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal
        title="My title"
        children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam ratione quam modi voluptas temporibus doloribus aliquam molestias non hic facilis recusandae, beatae minus? Asperiores vitae ad rem itaque corporis."
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        closeOnOverlayClick
      />
      <DatePicker
        value={date}
        onChange={setDate}
        showTodayButton
        label="My label"
        locale="fr"
        captionLayout="dropdown"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form onSubmit={handleSubmit}>
          <EmployeeGeneralInfo />
          <EmployeeAddress state={state} handleChange={handleChange} />
          <EmployeeDepartment state={state} handleChange={handleChange} />

          <Button type="submit" variant="outlined">
            Save
          </Button>
        </form>
      </LocalizationProvider>
    </main>
  );
}
