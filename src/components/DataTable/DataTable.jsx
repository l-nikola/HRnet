import { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import DataTableHead from "./DataTableHead";

// Sorts rows by a given column in ascending or descending order
function sortRows(rows, order, orderBy) {
  return [...rows].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
    return 0;
  });
}

export default function DataTable({ rows, headCells }) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // Toggles sort direction if the same column is clicked
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  // Resets to page 1 when the number of rows per page changes
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /* ===== SEARCH FILTER ===== */

  // Filters rows by first and last name based on the search input
  const filteredRows = rows.filter((row) =>
    `${row.firstName} ${row.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  // Falls back to the first column if no sort column is selected yet
  const safeOrderBy = orderBy ?? headCells[0]?.id;

  // Applies sorting then slices the result to only show the current page
  const visibleRows = sortRows(filteredRows, order, safeOrderBy).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  // Resets to page 1 when the search changes to avoid landing on an empty page
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  return (
    <Box className="dataTable">
      <Paper className="dataTable__paper">
        {/* ===== SEARCH INPUT ===== */}
        <Box className="dataTable__searchBox">
          <TextField
            label="Search"
            size="small"
            value={search}
            onChange={handleSearchChange}
          />
        </Box>

        <TableContainer>
          <Table size="medium" className="dataTable__table">
            <DataTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />

            <TableBody>
              {visibleRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={headCells.length} align="center">
                    No data available...
                  </TableCell>
                </TableRow>
              ) : (
                // Renders one row per employee, with one cell per column
                visibleRows.map((row) => (
                  <TableRow hover key={row.id}>
                    {headCells.map((cell) => (
                      <TableCell className="dataTable__cell" key={cell.id}>
                        {row[cell.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
