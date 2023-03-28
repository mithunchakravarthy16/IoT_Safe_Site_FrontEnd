import { useState, Fragment, useEffect } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AdminHeader from "components/AdminHeader";
import useStyles from "./styles";
import ColorScheme from "components/ColorScheme";
import DevtoolsUser from "components/DevToolsUser";

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
  const tags = [
    {
      name: "H1",
      size: "2",
      color: "#FFFFFF",
    },
  ];

  const buttons = [
    {
      name: "Primary",
      size: "2",
      bgColor: "#FFFFFF",
      textColor: "#FFFFFF",
    },
  ];

  const markers = [
    {
      name: "Events",
      bgColor: "#FFFFFF",
    },
  ];

  const tabs = [
    {
      name: "Events",
      bgColor: "#FFFFFF",
      textColor: "#FFFFFF",
    },
  ];

  const [state, updateState] = useState("#FFFFFF");

  const [multipleTags, setMuiltipleTags] = useState<any>();

  const [multipleButtons, setMuiltipleButtons] = useState<any>();

  const [multipleMarkers, setMuiltipleMarkers] = useState<any>();

  const [multipleTabs, setMuiltipleTabs] = useState<any>();

  const my_array = Array.from(Array(100 + 1).keys()).slice(1);

  const fontSizes: { value: number; label: number }[] = [];

  my_array?.map((item: any) => {
    if (item % 2 == 0) {
      return fontSizes.push({
        value: item,
        label: item,
      });
    }
  });

  useEffect(() => {
    setActivePage(0);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("colorScheme") || "{}");

    if (
      data?.buttons?.length > 0 ||
      data?.markers?.length > 0 ||
      data?.semanticTags?.length > 0 ||
      data?.tabs?.length > 0
    ) {
      setMuiltipleTags(data?.semanticTags);
      setMuiltipleButtons(data?.buttons);
      setMuiltipleMarkers(data?.markers);
      setMuiltipleTabs(data?.tabs);
    } else {
      setMuiltipleTags(tags);
      setMuiltipleButtons(buttons);
      setMuiltipleMarkers(markers);
      setMuiltipleTabs(tabs);
    }
  }, []);

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

  const handleUpdate = () => {
    const data = {
      semanticTags: multipleTags,
      buttons: multipleButtons,
      markers: multipleMarkers,
      tabs: multipleTabs,
    };
    localStorage.setItem("colorScheme", JSON.stringify(data));
  };

  const [activeTab, setActiveTab] = useState<any>(menuItems[activePage]);
  useEffect(() => {
    setActiveTab(menuItems[activePage]?.name);
  }, [activePage]);

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
                  <p className={colorSchemeHeading}>{activeTab}</p>
                </Grid>
                <Grid item xs={6} className={adminHeaderButtonSection}>
                  <Button variant="outlined" className={previewButton}>
                    Preview
                  </Button>
                  <Button variant="contained" className={updateButton} disabled>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    className={updateButton}
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
              {activePage === 0 ? (
                <ColorScheme />
              ) : activePage === 2 ? (
                <DevtoolsUser />
              ) : null}
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DevTools;
