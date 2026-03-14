import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
import { headCells } from "../../data/headCells";
import { states } from "../../data/states";
import { departements } from "../../data/departements";

export default function CurrentEmployee() {
  // Retrieves the employee list from the Redux store
  const employees = useSelector((state) => state.employees.list);

  // Replaces stored ids with readable labels before passing to the table
  const rows = employees.map((employee) => ({
    ...employee,
    department: departements.find(
      (department) => department.id === employee.department,
    )?.label,
    state: states.find((state) => state.id === employee.state)?.abbreviation,
  }));

  return (
    <section className="currentEmployee">
      <DataTable rows={rows} headCells={headCells} />
    </section>
  );
}
