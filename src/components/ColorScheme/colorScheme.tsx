import { useState, Fragment, useEffect } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import ColorPicker from "elements/ColorPicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "../../elements/Select";
import adminPlusIcon from "../../assets/admin-plus-icon.svg";
import deleteIcon from "../../assets/trashIcon.svg";
import useStyles from "./styles";

const ColorScheme: React.FC<any> = (props) => {
  const { activeTab } = props;
  const {
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
    adminRightPanelHeader,
    previewButton,
    adminHeaderButtonSection,
    updateButton,
    colorSchemeHeading,
    innerPanel,
    adminRightPanelMainBody,
  } = useStyles();

  const [activePage, setActivePage] = useState<any>();
  const tags = [
    {
      name: "H1",
      size: "unset",
      color: "unset",
    },
  ];

  const buttons = [
    {
      name: "Primary",
      size: "unset",
      bgColor: "#nnn",
      textColor: "unset",
    },
  ];

  const markers = [
    {
      name: "Events",
      bgColor: "unset",
    },
  ];

  const tabs = [
    {
      name: "Events",
      bgColor: "unset",
      textColor: "unset",
    },
  ];

  const [state, updateState] = useState("unset");

  const [multipleTags, setMuiltipleTags] = useState<any>();

  const [multipleButtons, setMuiltipleButtons] = useState<any>();

  const [multipleMarkers, setMuiltipleMarkers] = useState<any>();

  const [multipleTabs, setMuiltipleTabs] = useState<any>();

  const [loginValue, setLoginValue] = useState<any>();
  const [themeValue, setThemeValue] = useState<any>();
  const [footerValue, setFooterValue] = useState<any>();
  const [loginColorValue, setLoginColorValue] = useState<any>("unset");
  const [themeColorValue, setThemeColorValue] = useState<any>("unset");
  const [footerColorValue, setFooterColorValue] = useState<any>("unset");

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
  const selectList = [
    { label: "H1", value: "H1" },
    { label: "H2", value: "H2" },
    { label: "H3", value: "H3" },
    { label: "H4", value: "H4" },
    { label: "H5", value: "H5" },
    { label: "Subtitle1", value: "Subtitle1" },
    { label: "Subtitle2", value: "Subtitle2" },
    { label: "Body", value: "Body" },
  ];

  const buttonOptions = [
    { label: "Primary", value: "Primary" },
    { label: "Secondary", value: "Secondary" },
  ];

  const tabOptions = [
    { label: "Events", value: "Events" },
    { label: "Incidents", value: "Incidents" },
    { label: "Alerts", value: "Alerts" },
  ];

  const handleInput = (e: any) => {
    updateState(e.target.value);
  };

  const handleAddSemanticTags = () => {
    setMuiltipleTags([...multipleTags, ...tags]);
  };

  const handleSelectFont = (val: any, index: number) => {
    const tags = [...multipleTags];
    tags[index]["size"] = val;
    setMuiltipleTags(tags);
  };

  const handleSelectTags = (val: any, index: number) => {
    const tags = [...multipleTags];
    tags[index]["name"] = val;
    setMuiltipleTags(tags);
  };

  const handleInputColor = (e: any, index: number) => {
    const tags = [...multipleTags];
    tags[index]["color"] = e.target.value;
    setMuiltipleTags(tags);
  };

  const handleAddButtons = () => {
    setMuiltipleButtons([...multipleButtons, ...buttons]);
  };

  const handleSelectButtons = (val: any, index: number) => {
    const buttons = [...multipleButtons];
    buttons[index]["name"] = val;
    setMuiltipleButtons(buttons);
  };

  const handleSelectButtonFont = (val: any, index: number) => {
    const buttons = [...multipleButtons];
    buttons[index]["size"] = val;
    setMuiltipleButtons(buttons);
  };

  const handleBgInputColor = (e: any, index: number) => {
    const buttons = [...multipleButtons];
    buttons[index]["bgColor"] = e.target.value;
    setMuiltipleButtons(buttons);
  };

  const handleTextInputColor = (e: any, index: number) => {
    const buttons = [...multipleButtons];
    buttons[index]["textColor"] = e.target.value;
    setMuiltipleButtons(buttons);
  };

  const handleAddMarkers = () => {
    setMuiltipleMarkers([...multipleMarkers, ...markers]);
  };

  const handleSelectMarker = (val: any, index: number) => {
    const markers = [...multipleMarkers];
    markers[index]["name"] = val;
    setMuiltipleMarkers(markers);
  };

  const handleMarkerInputColor = (e: any, index: number) => {
    const markers = [...multipleMarkers];
    markers[index]["bgColor"] = e.target.value;
    setMuiltipleMarkers(markers);
  };

  const handleAddTabs = () => {
    setMuiltipleTabs([...multipleTabs, ...tabs]);
  };

  const handleSelectTab = (val: any, index: number) => {
    const tabs = [...multipleTabs];
    tabs[index]["name"] = val;
    setMuiltipleTabs(tabs);
  };

  const handleTabBgInputColor = (e: any, index: number) => {
    const tabs = [...multipleTabs];
    tabs[index]["bgColor"] = e.target.value;
    setMuiltipleTabs(tabs);
  };
  const handleTabTextInputColor = (e: any, index: number) => {
    const tabs = [...multipleTabs];
    tabs[index]["textColor"] = e.target.value;
    setMuiltipleTabs(tabs);
  };

  const handleRemoveSemanticTags = (index: number) => {
    setMuiltipleTags((prev: any) => {
      return prev.filter((item: any, i: number) => i !== index);
    });
  };

  const handleRemoveButtons = (index: number) => {
    setMuiltipleButtons((prev: any) => {
      return prev.filter((item: any, i: number) => i !== index);
    });
  };

  const handleRemoveMarkers = (index: number) => {
    setMuiltipleMarkers((prev: any) => {
      return prev.filter((item: any, i: number) => i !== index);
    });
  };

  const handleRemoveTabs = (index: number) => {
    setMuiltipleTabs((prev: any) => {
      return prev.filter((item: any, i: number) => i !== index);
    });
  };

  const handleUpdate = () => {
    const data = {
      semanticTags: multipleTags,
      buttons: multipleButtons,
      markers: multipleMarkers,
      tabs: multipleTabs,
      bgData: {
        login: { type: loginValue, color: loginColorValue },
        theme: { type: themeValue, color: themeColorValue },
        footer: { type: footerValue, color: footerColorValue },
      },
    };
    localStorage.setItem("colorScheme", JSON.stringify(data));
  };

  const handleLoginRadioChange = (e: any) => {
    setLoginValue(e.target.value);
  };

  const handleThemeRadioChange = (e: any) => {
    setThemeValue(e.target.value);
  };

  const handleFooterRadioChange = (e: any) => {
    setFooterValue(e.target.value);
  };

  const handleLoginInputColor = (e: any) => {
    setLoginColorValue(e.target.value);
  };

  const handleThemeInputColor = (e: any) => {
    setThemeColorValue(e.target.value);
  };

  const handleFooterInputColor = (e: any) => {
    setFooterColorValue(e.target.value);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
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
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={insideContainer}>
            <p className={backgroundColor}>Background color</p>
            <Grid container className={adminRightPanelMainBody}>
              <Grid item xs={3}>
                <p className={radioButtonHeader}>Login</p>
                <FormControl className={radioButton}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={loginValue}
                    onChange={handleLoginRadioChange}
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
                    value={themeValue}
                    onChange={handleThemeRadioChange}
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
                    value={footerValue}
                    onChange={handleFooterRadioChange}
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
                  <ColorPicker
                    onChange={handleLoginInputColor}
                    value={loginColorValue}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <p className={radioButtonHeader}>Header</p>
                <div className={colorPickerItem}>
                  <ColorPicker
                    onChange={handleThemeInputColor}
                    value={themeColorValue}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <p className={radioButtonHeader}>Header</p>
                <div className={colorPickerItem}>
                  <ColorPicker
                    onChange={handleFooterInputColor}
                    value={footerColorValue}
                  />
                </div>
              </Grid>
            </Grid>
            <p className={backgroundColor}>Tags</p>
            <Grid container className={adminRightPanelBody}>
              {multipleTags?.map((item: any, index: number) => {
                return (
                  <Grid container>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Semantic tags</p>

                      <Select
                        selectList={selectList}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        value={item.name}
                        type={"admin"}
                        handleSelect={(val: any) =>
                          handleSelectTags(val, index)
                        }
                      />
                    </Grid>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Font Size</p>
                      <Select
                        selectList={fontSizes}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        handleSelect={(val: any) =>
                          handleSelectFont(val, index)
                        }
                        value={item.size}
                        type={"admin"}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className={radioButtonHeader}>Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) => handleInputColor(val, index)}
                          value={item.color}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        className={deleteIconClass}
                        onClick={() => handleRemoveSemanticTags(index)}
                      >
                        {multipleTags?.length > 1 && index !== 0 && (
                          <img src={deleteIcon} />
                        )}
                      </div>
                      <div
                        className={adminPlusIconClass}
                        onClick={handleAddSemanticTags}
                      >
                        <img src={adminPlusIcon} />
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <p className={backgroundColor}>Button</p>
            <Grid container className={adminRightPanelBody}>
              {multipleButtons?.map((item: any, index: number) => {
                return (
                  <Grid container>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Button Style</p>

                      <Select
                        selectList={buttonOptions}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        value={item.name}
                        type={"admin"}
                        handleSelect={(val: any) =>
                          handleSelectButtons(val, index)
                        }
                      />
                    </Grid>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Font Size</p>
                      <Select
                        selectList={fontSizes}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        handleSelect={(val: any) =>
                          handleSelectButtonFont(val, index)
                        }
                        value={item.size}
                        type={"admin"}
                      />
                    </Grid>
                    <Grid item xs={2.3}>
                      <p className={radioButtonHeader}>Bg_Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) =>
                            handleBgInputColor(val, index)
                          }
                          value={item.bgColor}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2.3}>
                      <p className={radioButtonHeader}>Text_Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) =>
                            handleTextInputColor(val, index)
                          }
                          value={item.textColor}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        className={deleteIconClass}
                        onClick={() => handleRemoveButtons(index)}
                      >
                        {multipleButtons?.length > 1 && index !== 0 && (
                          <img src={deleteIcon} />
                        )}
                      </div>
                      <div
                        className={adminPlusIconClass}
                        onClick={handleAddButtons}
                      >
                        {" "}
                        <img src={adminPlusIcon} />
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <p className={backgroundColor}>Location Marker</p>
            <Grid container className={adminRightPanelBody}>
              {multipleMarkers?.map((item: any, index: number) => {
                return (
                  <Grid container>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Marker</p>

                      <Select
                        selectList={tabOptions}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        value={item.name}
                        type={"admin"}
                        handleSelect={(val: any) =>
                          handleSelectMarker(val, index)
                        }
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p className={radioButtonHeader}>Bg_Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) =>
                            handleMarkerInputColor(val, index)
                          }
                          value={item.bgColor}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        className={deleteIconClass}
                        onClick={() => handleRemoveMarkers(index)}
                      >
                        {multipleMarkers?.length > 1 && index !== 0 && (
                          <img src={deleteIcon} />
                        )}
                      </div>
                      <div
                        className={adminPlusIconClass}
                        onClick={handleAddMarkers}
                      >
                        <img src={adminPlusIcon} />
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <p className={backgroundColor}>Tab</p>
            <Grid container className={adminRightPanelBody}>
              {multipleTabs?.map((item: any, index: number) => {
                return (
                  <Grid container>
                    <Grid item xs={2} className={customSelects}>
                      <p className={radioButtonHeader}>Events</p>
                      <Select
                        selectList={tabOptions}
                        customWidth={"100%"}
                        customHeight={"54px"}
                        value={item.name}
                        type={"admin"}
                        handleSelect={(val: any) => handleSelectTab(val, index)}
                      />
                    </Grid>
                    <Grid item xs={2.3}>
                      <p className={radioButtonHeader}>Bg_Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) =>
                            handleTabBgInputColor(val, index)
                          }
                          value={item.bgColor}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2.3}>
                      <p className={radioButtonHeader}>Text_Color</p>
                      <div className={colorPickerItem}>
                        <ColorPicker
                          onChange={(val: any) =>
                            handleTabTextInputColor(val, index)
                          }
                          value={item.textColor}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={2}>
                      <div
                        className={deleteIconClass}
                        onClick={() => handleRemoveTabs(index)}
                      >
                        {multipleTabs?.length > 1 && index !== 0 && (
                          <img src={deleteIcon} />
                        )}
                      </div>
                      <div
                        className={adminPlusIconClass}
                        onClick={handleAddTabs}
                      >
                        <img src={adminPlusIcon} />
                      </div>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ColorScheme;
