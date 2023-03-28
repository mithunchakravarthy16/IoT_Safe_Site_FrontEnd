import { useState, Fragment, useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material"
import ColorPicker from "elements/ColorPicker";
import AdminHeader from "components/AdminHeader";
import useStyles from "./styles";
import ColorScheme from "components/ColorScheme";
import DevtoolsUser from "components/DevToolsUser";
import default_logo from "../../assets/default_logo.svg";

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
    colorSchemeSubeading,
    innerPanel,
    backgroundColor,
    radioButtonHeader,
    adminRightPanelBody,
    adminRightPanelBackgroundColor,
    customSelects,
    adminPlusIconClass,
    colorPickerItem,
    radioButton,
    deleteIconClass,
    insideContainer,
    fileUploadContainer,
    fileUploadTitle,
    fileUploadContent,
    logoPreviewWrapper,
    logoPreviewInnercontainer,
    logoPreview,
    invisibleDisplay,
  } = useStyles();

  const headerLogoInputRef = useRef<any>(null)
  const loginLogoInputRef = useRef<any>(null)
  const footerLogoInputRef = useRef<any>(null)

  const [activePage, setActivePage] = useState<any>();
  const [footerLogoType, setFooterLogoType] = useState("image");
  const [customLogos, setCustomLogos] = useState({header: "", login: "", footer: {type: "image", value: "", color: ""}})
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

  const handleLogoChangesUpdate = () => {
    localStorage.setItem("customLogos", JSON.stringify(customLogos))
  }

  const getLogos = () => {
    const defaultLogos = JSON.stringify({
      login: "",
      header: "",
      footer: {
        type: "image",
        value: ""
      }
    })
    const logos = JSON.parse(localStorage.getItem("customLogos") || defaultLogos)
    setCustomLogos(logos)
  }

  const onLogoChange = (place: string) => {
    switch(place) {
      case 'header': {
        headerLogoInputRef?.current?.click()
        break;
      }
      case 'login': {
        loginLogoInputRef?.current?.click()
        break;
      }
      case 'footer': {
        footerLogoInputRef?.current?.click()
        break;
      }
    }
  }

  const onLogoUpdated = (event: any, location: string) => {
    const oldLogos = {...customLogos};
    let imageString = ""

    const file = event.target.files[0];
    const mimeType = file.type

  // Create a new file reader
    const reader: any = new FileReader();

    // Set the onload event handler
    reader.readAsDataURL(file);
    reader.onload = () => {
      // Convert the file contents to base64
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

      // Log the base64 string to the console
      imageString = "data:"+mimeType+";base64,"+base64String;

      switch(location) {
        case "header": {
          oldLogos.header = imageString
          break;
        }
        case "login": {
          console.log("INSIDE CASE LOGIN", imageString)
          oldLogos.login = imageString
          break;
        }
        case "footer": {
          oldLogos.footer.value = imageString
          oldLogos.footer.type = footerLogoType
          break;
        }
      }

      setCustomLogos(oldLogos)
      console.log("ALL TASKS DONE", oldLogos, location)
    };
  }

  const onFooterTextChange = (evt: any) => {
    const oldLogos = {...customLogos};

    oldLogos.footer.value = evt.target.value
    oldLogos.footer.type = footerLogoType

    setCustomLogos(oldLogos)
  }

  const onFooterTextColorChange = (evt: any) => {
    const oldLogos = {...customLogos};

    oldLogos.footer.color = evt.target.value
    oldLogos.footer.type = footerLogoType

    setCustomLogos(oldLogos)
  }

  const [activeTab, setActiveTab] = useState<any>(menuItems[activePage]);
  useEffect(() => {
    setActiveTab(menuItems[activePage]?.name);
  }, [activePage]);

  const pageContentRenderer = () => {
    switch(activePage) {
      case 0: {
        return (
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
        )
      }

      case 1: {
        return (
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <div className={adminRightPanel}>
              <div className={innerPanel}>
                <Grid container className={adminRightPanelHeader}>
                  <Grid item xs={6}>
                    <p className={colorSchemeHeading}>Logo</p>
                    <p className={colorSchemeSubeading} >Allowed file extension * (.jpeg, .png, .svg). Max file size 5 MB.</p>
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
                      onClick={handleLogoChangesUpdate}
                    >
                      Update
                    </Button>
                  </Grid>
                </Grid>
                <div className={insideContainer}>
                  <div className={fileUploadContainer} >
                    <div className={fileUploadTitle} >Login</div>
                    <div className={fileUploadContent} >
                      <div className={logoPreviewWrapper} >
                        <div className={logoPreviewInnercontainer} >
                          <img className={logoPreview} src={customLogos.login || default_logo} />
                        </div>
                      </div>
                      <Button variant="contained" className={updateButton} onClick={() => onLogoChange("login")}>
                        Change
                      </Button>
                    </div>
                  </div>
                  <div className={fileUploadContainer} >
                    <div className={fileUploadTitle} >Header</div>
                    <div className={fileUploadContent} >
                      <div className={logoPreviewWrapper} >
                        <div className={logoPreviewInnercontainer} >
                          <img className={logoPreview} src={customLogos.header || default_logo} />
                        </div>
                      </div>
                      <Button variant="contained" className={updateButton} onClick={() => onLogoChange("header")}>
                        Change
                      </Button>
                    </div>
                  </div>
                  <div className={fileUploadContainer} >
                    <div className={fileUploadTitle} >Footer</div>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={footerLogoType}
                      onChange={evt => setFooterLogoType((evt.target as HTMLInputElement).value)}
                    >
                      <FormControlLabel value="image" control={<Radio />} label="Image" />
                      <FormControlLabel value="text" control={<Radio />} label="Text" />
                    </RadioGroup>
                    {
                      footerLogoType === "image"
                      ?
                      <div className={fileUploadContent} >
                        <div className={logoPreviewWrapper} >
                          <div className={logoPreviewInnercontainer} >
                            <img className={logoPreview} src={customLogos.footer.value || default_logo} />
                          </div>
                        </div>
                        <Button variant="contained" className={updateButton} onClick={() => onLogoChange("footer")}>
                          Change
                        </Button>
                      </div>
                      :
                      <div className={fileUploadContent} >
                        <Grid container className={adminRightPanelBackgroundColor}>
                          <Grid item>
                            <p className={radioButtonHeader}>Exter Text</p>
                            <div className={colorPickerItem}>
                              <TextField id="outlined-basic" label="Enter Text" variant="outlined" onChange={onFooterTextChange} value={customLogos.footer.value} />
                            </div>
                          </Grid>
                          <Grid item>
                            <p className={radioButtonHeader}>Change Text Color</p>
                            <div className={colorPickerItem}>
                              <ColorPicker onChange={onFooterTextColorChange} value={customLogos.footer.color} />
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    }
                  </div>
                  <input type="file" className={invisibleDisplay} ref={headerLogoInputRef} onChange={(evt: any) => onLogoUpdated(evt, "header")} />
                  <input type="file" className={invisibleDisplay} ref={loginLogoInputRef} onChange={(evt: any) => onLogoUpdated(evt, "login")} />
                  <input type="file" className={invisibleDisplay} ref={footerLogoInputRef} onChange={(evt: any) => onLogoUpdated(evt, "footer")} />
                </div>
              </div>
            </div>
          </Grid>
        )
      }
    }
  }

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
        {pageContentRenderer()}
      </Grid>
    </Fragment>
  );
};

export default DevTools;
