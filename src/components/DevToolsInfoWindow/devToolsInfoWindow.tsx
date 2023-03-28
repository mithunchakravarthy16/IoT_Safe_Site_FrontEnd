import React, { useState, useEffect, useRef, useMemo } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import theme from "../../theme/theme";
import colorCodes from "../../theme/colors";
import { OutlinedInput } from "@mui/material";
import EyeOff from "../../assets/login/lock.svg";
import OpenEyeIcon from "../../assets/login/lock.svg";
import AttherateIcon from "../../assets/login/atthirate.svg";
import useStyles from "./styles";

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
    maxWidth: "618px",
    background: `${colorCodes.colorWhite} !important`,
    color: colorCodes.colorWhite,
    padding: 30,
    borderRadius: "0px",
  },
  "& .MuiDialog-container": {
    marginTop: "80px !important",
    background: `rgba(10, 23, 66, 0.86); !important`,
    backdropFilter: "blur(4px)",
    height: "calc(100vh - 84px) !important",
  },
}));

const InfoDialog: React.FC<any> = (props) => {
  const { setShowWindow } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const {
    newUser,
    inputTitle,
    inputField,
    formikErrorClass,
    outlineInputField,
    eyeOff,
    attherate,
    adminHeaderButtonSection,
    updateButton,
    previewButton,
  } = useStyles(appTheme);

  const [open, setOpen] = useState(!false);

  const handleClose = () => {
    setOpen(!open);
    setShowWindow(false);
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <DialogWrapper open={open}>
        <Grid container>
          <Grid item xs={12}>
            <div>
              <Typography variant="h5" className={newUser}>
                Create New User
              </Typography>
            </div>
            <div className={outlineInputField}>
              <p className={inputTitle}>Your Email or User Name</p>
              <OutlinedInput
                className={inputField}
                fullWidth
                placeholder="username@zurichna.com"
                type="text"
                name="userid"
                endAdornment={<img className={attherate} src={AttherateIcon} />}
              />
            </div>
            <div className={outlineInputField}>
              <p className={inputTitle}>Password</p>
              <OutlinedInput
                className={inputField}
                fullWidth
                placeholder="&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;"
                type="password"
                name="password"
                endAdornment={
                  <img
                    className={eyeOff}
                    src={showPassword ? OpenEyeIcon : EyeOff}
                    onClick={handlePasswordVisibility}
                  />
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} className={adminHeaderButtonSection}>
            <Button
              variant="outlined"
              className={previewButton}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={updateButton}
              onClick={handleClose}
            >
              Save
            </Button>
          </Grid>
        </Grid>
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
      </DialogWrapper>
    </>
  );
};

export default InfoDialog;
