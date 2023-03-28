import { createTheme } from "@mui/material/styles";

interface semanticTagsTypes {
  name: string;
  color: string;
  size: string | number;
}

const semanticTags = [
  {
    name: "H1",

    // size: "48px",
    // color: "#000000",
  },
  {
    name: "H2",

    // size: "34px",
    // color: "#000000",
  },
  {
    name: "H3",

    // size: "18px",
    // color: "#000000",
  },
  {
    name: "H4",

    // size: "16px",
    // color: "#000000",
  },
  {
    name: "H5",

    // size: "14px",
    // color: "#45DA19",
  },
  {
    name: "H6",

    // size: "12px",
    // color: "#000000",
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

const defaultData = { semanticTags, tabs, buttons, markers };

let data = JSON.parse(localStorage.getItem("colorScheme")!)
  ? JSON.parse(localStorage.getItem("colorScheme")!)
  : defaultData;

data.semanticTags = [...defaultData.semanticTags, ...data?.semanticTags];
data.buttons = [...defaultData.buttons, ...data?.buttons];
data.markers = [...defaultData.markers, ...data?.markers];
data.tabs = [...defaultData.tabs, ...data?.tabs];

const customTheming: any = {};

data?.semanticTags?.map((tag: semanticTagsTypes) => {
  const { name, color, size } = tag;

  customTheming[name?.toLowerCase()] = {
    color: color ? `${color}!important` : "unset",
    fontSize: size ? `${size.toString()}px !important` : "unset",
    fontWeight: "unset",
    // fontFamily: `'Poppins', sans-serif`,
  };
});

export default customTheming;
