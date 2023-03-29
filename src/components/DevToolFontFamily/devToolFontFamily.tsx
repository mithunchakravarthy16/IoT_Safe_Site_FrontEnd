import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import useStyles from "./styles";
import { json } from "stream/consumers";

const DevToolFontFamily: React.FC<any> = (props) => {
  const { activeTab } = props;
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const {
    colorSchemeHeading,
    textAreaStyle,
    updateButtonDisabled,
    adminRightPanelHeader,
    googleFontLinkStyle,
    adminHeaderButtonSection,
    updateButton,
    innerPanel,
    googleFontHeading,
    previewButton,
    previewButtonDisabled,
    cancelButtonDisabled,
    cancelButton,
    textAreaStyleDisabled,
  } = useStyles(appTheme);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  useEffect(() => {
    switch (selectedTheme) {
      case "red":
        setAppTheme(theme?.redTheme);
        break;
      case "green":
        setAppTheme(theme?.greenTheme);
        break;
      case "yellow":
        setAppTheme(theme?.yellowTheme);
        break;
      case "default":
        setAppTheme(theme?.defaultTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const [googleFontDetails, setGoogleFontDetails] = useState<any>();
  const [fontFamily, setFontFamily] = useState<any>();
  const [isFontAdded, setIsFontAdded] = useState<boolean>(false);
  const [isFontFormatValid, setIsFontFormatValid] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<any>();
  const [buttonName, setButtonName] = useState<any>("SAVE");
  const [cancelButtonActive, setCancelButtonActive] = useState<boolean>(false);
  const [previewButtonActive, setPreviewButtonActive] =
    useState<boolean>(false);

  const handleSubmitButton = (event: any) => {
    if (textValue.includes("<link")) {
      localStorage.setItem("googleFont", JSON.stringify(googleFontDetails));
      localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
      setIsFontFormatValid(!isFontFormatValid);
      setCancelButtonActive(!cancelButtonActive);
      setPreviewButtonActive(!previewButtonActive);

      // setButtonName("EDIT");
    } else {
      alert("Invalid Font Format");
    }
  };

  const handleTextAreaContent = (event: any) => {
    setTextValue(event.target.value);
    const text = event.target.value;
    if (text.length > 0) {
      setIsFontAdded(true);
      setCancelButtonActive(true);
    } else {
      setCancelButtonActive(false);
    }
    if (text.includes("<link")) {
      const newsplit = text?.split("?family=");
      const split2 = newsplit && newsplit[1]?.split("&");
      if (split2[0].includes("+")) {
        const split3 = split2[0]?.split("+");
        if (split3[1].includes(":")) {
          const split4 = split3[1].split(":");
          const split6 =
            split3[0] && split3[1] && split4[0] && split3[0] + " " + split4[0];
          setFontFamily(`'` + split6 + `'` + ", sans-serif");
        } else {
          const split7 = split3[0] && split3[1] && split3[0] + " " + split3[1];
          setFontFamily(`'` + split7 + `'` + ", sans-serif");
        }
      } else {
        if (split2[0].includes(":")) {
          const split4 = split2[0].split(":");
          setFontFamily(`'` + split4[0] + `'` + ", sans-serif");
        } else {
          setFontFamily(`'` + split2[0] + `'` + ", cursive");
        }
      }

      const textSplit = text?.split("href");
      const newSplit = textSplit && textSplit[3]?.split(`"`);
      setGoogleFontDetails(newSplit && newSplit[1]);
      // setIsFontFormatValid(true);
    } else {
      // alert("Invalid Font Format");
    }
  };

  const [fontDetails, setFontDetails] = useState<any>();

  useEffect(() => {
    const data = localStorage.getItem("googleFont");
    setFontDetails(data);
  }, [googleFontDetails, fontDetails]);

  const clearTextareaValue = () => {
    setTextValue("");
  };

  useEffect(() => {
    if (isFontFormatValid) {
      setButtonName("EDIT");
    } else {
      setButtonName("SAVE");
    }
    if (buttonName === "EDIT") {
      setButtonName("UPDATE");
    }
    if (buttonName === "UPDATE") {
      setButtonName("EDIT");
    }
  }, [isFontFormatValid]);

  return (
    <div>
      <div className={innerPanel}>
        <Grid container className={adminRightPanelHeader}>
          <Grid item xs={6}>
            <p className={colorSchemeHeading}>{activeTab}</p>
          </Grid>
          <Grid item xs={6} className={adminHeaderButtonSection}>
            <Button
              variant="outlined"
              className={
                previewButtonActive ? previewButton : previewButtonDisabled
              }
            >
              Preview
            </Button>

            <Button
              variant="contained"
              className={
                cancelButtonActive ? cancelButton : cancelButtonDisabled
              }
              onClick={clearTextareaValue}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={isFontAdded ? updateButton : updateButtonDisabled}
              onClick={handleSubmitButton}
            >
              {buttonName}
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={googleFontHeading}>Google Font</div>
      <textarea
        className={isFontFormatValid ? textAreaStyleDisabled : textAreaStyle}
        onChange={handleTextAreaContent}
        value={textValue}
        readOnly={isFontFormatValid ? true : false}
      />
      <div className={googleFontLinkStyle}>
        <a href="https://fonts.google.com" target="_blank">
          https://fonts.google.com/
        </a>
        {/* <div>{fontFamily}</div>
        <div>{googleFontDetails}</div> */}
      </div>
    </div>
  );
};

export default DevToolFontFamily;
