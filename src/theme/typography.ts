// import { createTheme } from "@mui/material/styles";



// const theme = createTheme();

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



  const data = JSON.parse(localStorage.getItem("colorScheme") || "{}");

console.log("typo-data-from-local", data?.semanticTags)

  if (
    data?.buttons?.length > 0 ||
    data?.markers?.length > 0 ||
    data?.semanticTags?.length > 0 ||
    data?.tabs?.length > 0
  ) {
    
  } else {
    
  }



const h1 = {  
  fontSize: "24px",
  color:''
};

const h2 = { 
};

const h3 = { 
};

const h4 = {
};

const h5 = {
};

const h6 = {};


const body = {};


const typography = { 
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  body: body
};

export default typography;
