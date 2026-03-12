import { useSelector } from "react-redux";
import DataTable from "../../components/DataTable/DataTable";
import { headCells } from "../../data/headCells";

export default function CurrentEmployee() {
  const employees = useSelector((state) => state.employees.list);

  return (
    <section className="currentEmployee">
      <DataTable rows={employees} headCells={headCells} />
    </section>
  );
}
