import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";


  function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
  }
  
  const rows = [
    createData("Metal strips", 18908424, "2 March 2022", ),
    createData("Car parts ", 18908424, "2 March 2022", ),
    createData("Plastic bottles", 18908424, "2 March 2022", ),
    createData("Glass bottles", 18908421, "2 March 2022",),
  ];
  
  const Orders = () => {
    //This is to set the current page number
    const [page, setPage] = useState(0);
    //This is to set the initial number of rows we want to display
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    return (
      <div className="Table">
        <h2>ORDERS</h2>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          className="table_container"
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Orders</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                  tabIndex={-1} 
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
  
                    <TableCell align="left">{row.trackingId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    {/* <TableCell align="left">
                      <span className="status">{row.status}</span>
                    </TableCell> */}
                    <TableCell align="left" className="Details">
                      Detail
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <TablePagination
          rowsPerPageOptions={[1, 2, 3,4]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
}

export default Orders