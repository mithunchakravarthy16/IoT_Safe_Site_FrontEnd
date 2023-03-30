import { createTheme } from "@mui/material/styles";
import {addDoc, collection, getDocs} from 'firebase/firestore/lite';
import { db } from "services/firebase";

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

// let firebaseData: any;



let firebaseData;

   const getFirebaseData = async ()=>{
    const buttonCollectionRef = collection(db, "customTheming" );
   const firebasePromis = await getDocs(buttonCollectionRef)
   const btns = firebasePromis.docs.map(docs => ({
    data : docs.data(),
    id : docs.id,
  }))
   return btns;
   } 

   const theme = getFirebaseData()
   
  //  getDocs(buttonCollectionRef)
  //   .then(response => {
      
  //     const btns = response.docs.map(docs => ({
  //       data : docs.data(),
  //       id : docs.id,
  //     }))
  //     // setButtons(btns)
  //     console.log("firebaseDataInside", btns)
  //     firebaseData= btns
  //     return(btns);
      
  //   })
  //   .catch(error=> console.log(error.message));


    console.log("firebaseDataOutside", theme);



  //   let finalResult:any;

  //   const firebaseDataValue = (result:any)=>{
  //     console.log("firebaseData", result);
  //     finalResult=result;

  //   }
  //  firebaseData.then(result=> {
      
  //     firebaseDataValue(result);
  //  })

   






    

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
