import { useState, Fragment, useEffect } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "../../assets/trashIcon.svg";
import useStyles from "./styles";
import DevToolsInfoWindow from "components/DevToolsInfoWindow";

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
  createData("IC", "Ice cream sandwich", "**********", "Delete"),
  createData("EC", "Eclair", "**********", "Delete"),
];

const INF_Table: React.FC<any> = (props) => {
  const [showWindow, setShowWindow] = useState<any>(false);
  const { activeTab } = props;

  const {
    customTable,
    rowInitial,
    deleteSection,
    adminRightPanelHeader,
    previewButton,
    adminHeaderButtonSection,
    updateButton,
    colorSchemeHeading,
    innerPanel,
  } = useStyles();

  const handleOpen = () => {
    setShowWindow(!showWindow);
  };

  return (
    <>
      <div className={innerPanel}>
        <Grid container className={adminRightPanelHeader}>
          <Grid item xs={6}>
            <p className={colorSchemeHeading}>{activeTab}</p>
          </Grid>
          <Grid item xs={6} className={adminHeaderButtonSection}>
            <Button variant="outlined" className={previewButton}>
              Preview
            </Button>
            <Button
              variant="contained"
              className={updateButton}
              onClick={handleOpen}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </div>
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
                  <TableCell align="right">
                    <div className={deleteSection}>
                      <img src={DeleteIcon} alt="delete icon" />
                      <div>{row.action}</div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {showWindow ? <DevToolsInfoWindow setShowWindow={setShowWindow} /> : null}
    </>
  );
};

export default INF_Table;
