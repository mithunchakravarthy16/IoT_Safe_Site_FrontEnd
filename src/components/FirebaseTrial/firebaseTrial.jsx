import React, { useEffect, useState } from 'react'
import { styled } from "@mui/material/styles";
import theme from "../../theme/theme";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {addDoc, collection, getDocs} from 'firebase/firestore/lite';
import { db } from 'lib/init-firebase';

const DialogWrapper = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    display: "none",
    // marginTop: "60px !important",
  },
  "& .MuiPaper-root": {
    maxHeight: "calc(100% - 96px)",
    width: "100vw",
    maxWidth: "1722px",
    background: `#000 !important`,
    color: "#fff",
    padding: 24,
    borderRadius: "15px",
  },
  "& .MuiDialog-container": {
    marginTop: "84px !important",
    background: `#fff !important`,
    backdropFilter: "blur(8px)",
    height: "calc(100vh - 84px) !important",
  },
}));



const FirebaseTrial = (props) => {

  const {setFirebaseTrialWindow}= props;

  const [open, setOpen] = useState(!false);

  const[buttons, setButtons]= useState([]);

  useEffect(()=>{
    getButtons()
  },[])

  useEffect(()=>{
    console.log("buttons", buttons)
  },[buttons])

  // async function getCities() {
  //   const citiesCol = collection(db, 'buttons');
  //   const citySnapshot = await getDocs(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   setButtons(cityList);
  // }

  const getButtons = ()=>{
    const buttonCollectionRef = collection(db, "buttons" );
    getDocs(buttonCollectionRef)
    .then(response => {
      
      const btns = response.docs.map(docs => ({
        data : docs.data(),
        id : docs.id,
      }))
      setButtons(btns)
    })
    .catch(error=> console.log(error.message))
  }

  // const docRef = await 
  const addButtons = ()=>{
    const addButtonCollectionRef = collection(db, "buttons" );
    addDoc(addButtonCollectionRef, {
      name: "Tokyo",
      country: "Japan"
    }).then(response=>console.log("success")).catch(error=> console.log(error.message));
  }
  

  const handleClose = () => {
    setOpen(!open);
    setFirebaseTrialWindow(false);
  };


  return (
    <DialogWrapper open={open}>
      <div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              top: 12,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
    <div onClick={getButtons}>


      FirebaseTrial-call firebase


    </div>
    <div onClick={addButtons}>
      add data to fire base
    </div>
    </DialogWrapper>
  )
}

export default FirebaseTrial

       
     