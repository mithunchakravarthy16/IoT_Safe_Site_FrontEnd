import { useState, Fragment, useEffect } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AdminHeader from "components/AdminHeader";
import ColorPicker from "elements/ColorPicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "../../elements/Select";
import adminPlusIcon from "../../assets/admin-plus-icon.svg";
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
    backgroundColor,
    radioButtonHeader,
    adminRightPanelBody,
    adminRightPanelBackgroundColor,
    customSelects,
    adminPlusIconClass,
    colorPickerItem,
    radioButton,
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
  const selectList = [
    { label: "H1", value: "H1" },
    { label: "H2", value: "H2" },
    { label: "H3", value: "H3" },
    { label: "H4", value: "H4" },
    { label: "H5", value: "H5" },
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
              <p className={backgroundColor}>Background color</p>
              <Grid container className={adminRightPanelBody}>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Login</p>
                  <FormControl className={radioButton}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="solid"
                        control={<Radio />}
                        label="Solid"
                      />
                      <FormControlLabel
                        value="gradient"
                        control={<Radio />}
                        label="Gradient"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Theme Header</p>
                  <FormControl className={radioButton}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="solid"
                        control={<Radio />}
                        label="Solid"
                      />
                      <FormControlLabel
                        value="gradient"
                        control={<Radio />}
                        label="Gradient"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Footer</p>
                  <FormControl className={radioButton}>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="solid"
                        control={<Radio />}
                        label="Solid"
                      />
                      <FormControlLabel
                        value="gradient"
                        control={<Radio />}
                        label="Gradient"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container className={adminRightPanelBackgroundColor}>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Header</p>
                  <div className={colorPickerItem}>
                    <ColorPicker onChange={handleInput} value={state} />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Header</p>
                  <div className={colorPickerItem}>
                    <ColorPicker onChange={handleInput} value={state} />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <p className={radioButtonHeader}>Header</p>
                  <div className={colorPickerItem}>
                    <ColorPicker onChange={handleInput} value={state} />
                  </div>
                </Grid>
              </Grid>
              <p className={backgroundColor}>Tags</p>
              <Grid container className={adminRightPanelBody}>
                <Grid item xs={2} className={customSelects}>
                  <p className={radioButtonHeader}>Semantic tags</p>
                  <Select
                    selectList={selectList}
                    customWidth={"100%"}
                    customHeight={"54px"}
                  />
                </Grid>
                <Grid item xs={2} className={customSelects}>
                  <p className={radioButtonHeader}>Font Size</p>
                  <Select
                    selectList={selectList}
                    customWidth={"100%"}
                    customHeight={"54px"}
                  />
                </Grid>
                <Grid item xs={2}>
                  <p className={radioButtonHeader}>Footer</p>
                  <div className={colorPickerItem}>
                    <ColorPicker onChange={handleInput} value={state} />
                  </div>
                </Grid>
                <Grid item xs={2} className={adminPlusIconClass}>
                  <img src={adminPlusIcon} />
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
