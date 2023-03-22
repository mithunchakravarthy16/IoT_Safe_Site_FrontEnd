import { useState, Fragment, useEffect } from "react";
import { Grid } from "@mui/material";
import AdminHeader from "components/AdminHeader";

import useStyles from "./styles";

const DevTools = () => {
  const { adminContentPanel } = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <AdminHeader />
        </Grid>
      </Grid>
      <Grid container className={adminContentPanel}>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          left
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          Right
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DevTools;
