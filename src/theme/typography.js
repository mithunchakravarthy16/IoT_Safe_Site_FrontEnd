// import { createTheme } from "@mui/material/styles";


// const theme = createTheme();

const semanticTags = [
  {
    name: "H1",
    size: "48",
    color: "#000000",
  },
  {
    name: "H2",
    size: "36",
    color: "#000000",
  },
  {
    name: "H3",
    size: "24",
    color: "#000000",
  },
  {
    name: "H4",
    size: "18",
    color: "#000000",
  },
  {
    name: "H5",
    size: "14",
    color: "#000000",
  },
  {
    name: "H6",
    size: "10",
    color: "#000000",
  },
  {
    
  }
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


  const defaultData = {semanticTags, tabs, buttons, markers}
  let data = JSON.parse(localStorage.getItem("colorScheme"));

console.log("typo-data-from-local", data?.semanticTags)

data.semanticTags = [...defaultData.semanticTags, ...data.semanticTags]
data.buttons = [...defaultData.buttons, ...data.buttons]
data.markers = [...defaultData.markers, ...data.markers]
data.tabs = [...defaultData.tabs, ...data.tabs]


const customTheming = {
  h1: {
    fontSize: "24px",
    color:''
  },
  h2: {
    fontSize: "24px",
    color:''
  },
  h3: {
    fontSize: "24px",
    color:''
  },
  h4: {
    fontSize: "24px",
    color:''
  },
  h5: {
    fontSize: "24px",
    color:''
  },
  h6: {
    fontSize: "24px",
    color:''
  },
  body: {
    fontSize: "24px",
    color:''
  }
}

data?.semanticTags?.map(tag => {
  const {name, color, size} = tag;
  customTheming[name.toLowerCase()] = {
    color,
    fontSize: size.toString()
  };
})

console.log("CUSTOM Theme Object", customTheming)

export default customTheming;
