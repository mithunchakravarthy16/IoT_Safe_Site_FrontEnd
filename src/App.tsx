import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import theme from "./theme/theme";
import { RootContainer } from "./styles";
import fbApp from "services/firebase";
// @ts-ignore
import { Helmet } from "react-helmet";
import { getFirestore, onSnapshot, doc } from "firebase/firestore";

const App = () => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

  const [fontFamily, setFontFamily] = useState<any>();

  const db = getFirestore(fbApp);

  const [fontDetails, setFontDetails] = useState<any>();

  const getFontFamily = async () => {
    try {
      const unsub = onSnapshot(
        doc(db, "customFontFamily", "fontFamily"),
        (doc) => {
          const docData: any = doc.data();
          setFontDetails(docData);
        }
      );
    } catch (error) {}
  };

  // const buttonCollectionRef = doc(db, "customTheming", "iotTheme" );
  // getDoc(buttonCollectionRef)
  // .then(response => {

  //   const btns = response.data()

  //   setFirebaseDataState(btns);

  // })
  // .catch(error=> console.log(error.message));

  useEffect(() => {
    getFontFamily();
    // localStorage.setItem("fontFamily", JSON.stringify("Montserrat"));
  }, []);

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

  // useEffect(() => {
  //   const fontDetails: any = localStorage?.getItem("fontFamily");
  //   const formattedFont = JSON.parse(fontDetails);
  //   setFontFamily(formattedFont);
  // }, [localStorage?.getItem("fontFamily")]);

  useEffect(() => {
    if (fontDetails) {
      localStorage.setItem("fontFamily", JSON.stringify(fontDetails?.fontLink));
    }
  }, [fontDetails]);

  return (
    <RootContainer id="rootContainer" fontFamily={fontDetails?.fontFamily}>
      <Helmet>
        <title>GD Safe Sites</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link id="result" href={fontDetails?.fontLink} rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RootContainer>
  );
};

export default App;
