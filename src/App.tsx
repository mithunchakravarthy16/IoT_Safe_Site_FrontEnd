import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import theme from "./theme/theme";
import { RootContainer } from "./styles";

const App = () => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
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

  useEffect(() => {
    const fontDetails = localStorage
      ?.getItem("fontFamily")
      ?.replace(/['"]+/g, "");

    setFontFamily(fontDetails);
  }, [localStorage?.getItem("fontFamily")?.replace(/['"]+/g, "")]);

  const [fontFamily, setFontFamily] = useState<any>();

  return (
    <RootContainer id="rootContainer" fontFamily={fontFamily}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RootContainer>
  );
};

export default App;
