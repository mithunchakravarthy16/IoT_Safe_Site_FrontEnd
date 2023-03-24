import { useState, Fragment, useEffect } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AdminHeader from "components/AdminHeader";
import ColorPicker from "elements/ColorPicker";
import useStyles from "./styles";

const DevTools = () => {
  const {
    adminContentPanel,
    adminLeftPanel,
    adminRightPanel,
    menuItemList,
    menuItemListActive,
    adminRightPanelHeader,
    previewButton,
    adminHeaderButtonSection,
    updateButton,
    colorSchemeHeading,
    innerPanel,
  } = useStyles();

  const [activePage, setActivePage] = useState<any>();

  const handleClick = (event: any, id: any) => {
    setActivePage(id);
  };

  const menuItems = [
    { name: "Color Scheme", id: 0 },
    { name: "Logo", id: 1 },
    { name: "Users", id: 2 },
    { name: "Font Family", id: 3 },
    { name: "Components", id: 4 },
  ];
  useEffect(() => {
    setActivePage(0);
  }, []);

  const [state, updateState] = useState("#FFFFFF");

  const handleInput = (e: any) => {
    updateState(e.target.value);
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <AdminHeader />
        </Grid>
      </Grid>
      <Grid container className={adminContentPanel}>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <div className={adminLeftPanel}>
            {menuItems &&
              menuItems.length > 0 &&
              menuItems.map((menu: any, index: any) => {
                return (
                  <p
                    key={index}
                    className={
                      activePage === menu.id ? menuItemListActive : menuItemList
                    }
                    onClick={(event) => handleClick(event, menu.id)}
                  >
                    {menu.name}
                  </p>
                );
              })}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <div className={adminRightPanel}>
            <div className={innerPanel}>
              <Grid container className={adminRightPanelHeader}>
                <Grid item xs={6}>
                  <p className={colorSchemeHeading}>Color Scheme</p>
                  <ColorPicker onChange={handleInput} value={state} />
                </Grid>
                <Grid item xs={6} className={adminHeaderButtonSection}>
                  <Button variant="outlined" className={previewButton}>
                    Preview
                  </Button>
                  <Button variant="contained" className={updateButton} disabled>
                    Cancel
                  </Button>
                  <Button variant="contained" className={updateButton}>
                    Update
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DevTools;
