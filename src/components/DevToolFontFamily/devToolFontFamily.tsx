import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import fbApp from "services/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore/lite";
import { db } from "services/firebase";
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
    inputTextDisabled,
    inputText,
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
  const [fontTextValue, setFontTextValue] = useState<any>();
  const [buttonName, setButtonName] = useState<any>("SAVE");
  const [cancelButtonActive, setCancelButtonActive] = useState<boolean>(false);
  const [previewButtonActive, setPreviewButtonActive] =
    useState<boolean>(false);
  const [customFont, setCustomFont] = useState<any>({
    fontLink: "",
    fontFamily: "",
  });

  const [fontDetails, setFontDetails] = useState<any>();

  const handleSubmitButton = () => {
    const ref = doc(db, "customFontFamily", "fontFamily");
    setDoc(ref, customFont)
      .then((response) => console.log("success"))
      .catch((error) => console.log(error.message));

    setIsFontFormatValid(!isFontFormatValid);
    setCancelButtonActive(!cancelButtonActive);
    setPreviewButtonActive(!previewButtonActive);

    // setDoc(addButtonCollectionRef, data).then(response=>console.log("success")).catch(error=> console.log(error.message));
    // try {
    //   // if (textValue.includes("<link")) {
    //   // localStorage.setItem("googleFont", JSON.stringify(googleFontDetails));
    //   // localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
    //   const ref = doc(db, "customFontFamily", "fontFamily");

    //   const dbResponse =  setDoc(ref, customFont);
    //   setIsFontFormatValid(!isFontFormatValid);
    //   setCancelButtonActive(!cancelButtonActive);
    //   setPreviewButtonActive(!previewButtonActive);
    //   // } else {
    //   //   alert("Invalid Font Format");
    //   // }
    // } catch (err) {
    //   console.error("SOMETHING WENT WRONG", err);
    // }
    // if (textValue.includes("<link")) {
    //   localStorage.setItem("googleFont", JSON.stringify(googleFontDetails));
    //   localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
    //   setIsFontFormatValid(!isFontFormatValid);
    //   setCancelButtonActive(!cancelButtonActive);
    //   setPreviewButtonActive(!previewButtonActive);
    // } else {
    //   alert("Invalid Font Format");
    // }
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
      const textSplit = text?.split("href");
      const newSplit = textSplit && textSplit[3]?.split(`"`);
      setGoogleFontDetails(newSplit && newSplit[1]);
      customFont.fontLink = newSplit && newSplit[1];
      // setIsFontFormatValid(true);
    } else {
      // alert("Invalid Font Format");
    }
  };

  const handleFontFamily = (event: any) => {
    setFontTextValue(event.target.value);
    // setFontFamily(event.target.value);

    const text = event.target.value;
    if (text.length > 0) {
      setIsFontAdded(true);
      setCancelButtonActive(true);
    } else {
      setCancelButtonActive(false);
    }

    if (text?.includes("font-family")) {
      const newsplit = text?.split("font-family:");
      const split2 = newsplit && newsplit[1]?.replace(/;/g, "");
      const split3 = split2?.split(",");
      setFontFamily(split2.trim());
      customFont.fontFamily = split2.trim();
    } else {
      alert("Enter valid CSS rules to specify families");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("googleFont");
    setFontDetails(data);
  }, [googleFontDetails, fontDetails]);

  const clearTextareaValue = () => {
    setTextValue("");
    setFontTextValue("");
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
      <div className={googleFontHeading}>Google Font Link</div>
      <textarea
        className={isFontFormatValid ? textAreaStyleDisabled : textAreaStyle}
        onChange={handleTextAreaContent}
        value={textValue}
        readOnly={isFontFormatValid ? true : false}
      />
      <div className={googleFontHeading}>Google Font Family</div>
      <input
        className={isFontFormatValid ? inputTextDisabled : inputText}
        onChange={handleFontFamily}
        value={fontTextValue}
        readOnly={isFontFormatValid ? true : false}
        placeholder={"Enter Font Family.."}
      />
      <div className={googleFontLinkStyle}>
        <a href="https://fonts.google.com" target="_blank">
          https://fonts.google.com/
        </a>
        {/* <div>{fontFamily}</div>
        <div>{googleFontDetails}</div> */}
      </div>
      <h2>Sample Font Style</h2>
    </div>
  );
};

export default DevToolFontFamily;
