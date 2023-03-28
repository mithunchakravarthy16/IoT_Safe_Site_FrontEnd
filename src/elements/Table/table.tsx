import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "../../assets/trashIcon.svg";
import useStyles from "./styles";

function createData(
  initial: string,
  name: string,
  password: string,
  action: string
) {
  return { initial, name, password, action };
}

const rows = [
  createData("JS", "john.smith@gmail.com", "**********", "Delete"),
  createData("JS", "Ice cream sandwich", "**********", "Delete"),
  createData("JS", "Eclair", "**********", "Delete"),
];

const INF_Table = () => {
  const { customTable, rowInitial, deleteSection } = useStyles();
  return (
    <div className={customTable}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <div className={rowInitial}>{row.initial}</div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right" className={deleteSection}>
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default INF_Table;
