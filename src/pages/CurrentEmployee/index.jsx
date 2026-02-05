import DataTable from "../../components/DataTable/DataTable";
import { rows, headCells } from "../../data/employeesDataTable";

export default function CurrentEmployee() {
  return (
    <section className="currentEmployee">
      <DataTable rows={rows} headCells={headCells} />
    </section>
  );
}
