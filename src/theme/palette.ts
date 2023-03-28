interface buttonTagsTypes {
    name: string;
    bgColor: string;
    
  }

const buttons: any = [
    {
        name : "primary",
        // bgColor: "#000000"
    },
     {
        name: "secondary",
        // bgColor: "#494c7d"
    }
];

const defaultData = { buttons};

let data = JSON.parse(localStorage.getItem("colorScheme")!)
  ? JSON.parse(localStorage.getItem("colorScheme")!)
  : defaultData;


data.buttons = JSON.parse(localStorage.getItem("colorScheme")!) ? [...defaultData.buttons, ...data?.buttons] : [...defaultData.buttons];


const palette: any = { };

data?.buttons?.map((tag: buttonTagsTypes) => {
    const { name, bgColor} = tag;
  
    palette[name?.toLowerCase()] = {
      main: bgColor ? `${bgColor}!important` : "#nnn",
    };
  });

export default palette;
