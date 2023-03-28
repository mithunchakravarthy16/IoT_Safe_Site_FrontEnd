import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { json } from "stream/consumers";

const DevToolFontFamily = () => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const { colorSchemeHeading, textAreaStyle } = useStyles(appTheme);

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

  const handleSubmitButton = (event: any) => {
    localStorage.setItem("googleFont", JSON.stringify(googleFontDetails));
    localStorage.setItem("fontFamily", JSON.stringify(fontFamily));
  };

  const handleTextAreaContent = (event: any) => {
    const text = event.target.value;
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
      }
    }

    const textSplit = text?.split("href");
    const newSplit = textSplit && textSplit[3]?.split(`"`);
    setGoogleFontDetails(newSplit && newSplit[1]);
  };

  const [fontDetails, setFontDetails] = useState<any>();

  useEffect(() => {
    const data = localStorage.getItem("googleFont");
    setFontDetails(data);
  }, [googleFontDetails, fontDetails]);

  return (
    <div>
      <div className={colorSchemeHeading}>Google Font</div>
      <textarea className={textAreaStyle} onChange={handleTextAreaContent} />
      <input type="submit" value="Submit" onClick={handleSubmitButton} />
    </div>
  );
};

export default DevToolFontFamily;
