import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme/theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import gdSafeSite from "../../assets/login/gd-save-site.svg";
import zurich from "../../assets/login/Zurich-logo.svg";
import EyeOff from "../../assets/login/lock.svg";
import OpenEyeIcon from "../../assets/login/lock.svg";
import AttherateIcon from "../../assets/login/atthirate.svg";
import saveSiteLogo from "../../assets/login/gd-save-site.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserLogin } from "../../redux/actions/loginActions";
import useStyles from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.login.loginData);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

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

  const [showPassword, setShowPassword] = useState(false);

  const {
    loginBannerSection,
    loginFormSection,
    loginBannerContent,
    logoSection,
    welcomeSection,
    welcomeContent,
    inputTitle,
    inputField,
    loginButton,
    innerForm,
    formikErrorClass,
    outlineInputField,
    loginWidth,
    eyeOff,
    attherate,
    radioButtonSection,
    forgotPassword,
    copyRights,
    zurichLogo,
  } = useStyles(appTheme);

  useEffect(() => {
    if (user && user?.userName) {
      localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
      navigate("/dashboard");
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: Yup.object({
      userid: Yup.string()
        .min(2, "Mininum 2 characters")
        .required(" Please enter the user email address"),
      password: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Please enter the password"),
    }),
    onSubmit: (values) => {
      if (
        (values?.userid).toLowerCase() === "john.smith@zurichna.com" &&
        values?.password === "John@2023"
      ) {
        let payload = {
          userName: values.userid?.toLowerCase(),
          passWord: values.password?.toLowerCase(),
        };
        dispatch(getUserLogin(payload));
      } else {
        alert("Incorrect User Credentials");
      }
    },
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const height: any = window.innerHeight;
  const width: any = window.innerWidth;

  return (
    <>
      <Grid container className={loginBannerSection}>
        <Grid item xs={12} className={loginFormSection}>
          <div className={loginWidth}>
            <Grid item xs={12} className={logoSection}>
              <img src={gdSafeSite} />
            </Grid>
            <Grid item xs={12}>
              <Box className={innerForm}>
                <form onSubmit={formik.handleSubmit}>
                  <div className={zurichLogo}>
                    <img src={zurich} />
                  </div>
                  <div className={welcomeSection}>
                    <p className={welcomeContent}>
                      {/* Test Build ( {width} X {height} ) */}
                      Welcome
                    </p>
                  </div>
                  <div className={outlineInputField}>
                    <p className={inputTitle}>Your Email</p>
                    <OutlinedInput
                      className={inputField}
                      fullWidth
                      placeholder="username@zurichna.com"
                      type="text"
                      name="userid"
                      value={formik.values.userid}
                      onChange={formik.handleChange}
                      endAdornment={
                        <img className={attherate} src={AttherateIcon} />
                      }
                    />
                    {formik.errors.userid && formik.touched.userid && (
                      <p className={formikErrorClass}>{formik.errors.userid}</p>
                    )}
                  </div>
                  <div className={outlineInputField}>
                    <p className={inputTitle}>Password</p>
                    <OutlinedInput
                      className={inputField}
                      fullWidth
                      placeholder="&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;&nbsp;&#9913;"
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      endAdornment={
                        <img
                          className={eyeOff}
                          src={showPassword ? OpenEyeIcon : EyeOff}
                          onClick={handlePasswordVisibility}
                        />
                      }
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p className={formikErrorClass}>
                        {formik.errors.password}
                      </p>
                    )}
                  </div>
                  <div className={radioButtonSection}>
                    <FormControlLabel
                      value="rememberMe"
                      control={<Radio />}
                      label="Remember me"
                    />
                    <p className={forgotPassword}>Forgot Password?</p>
                  </div>
                  <div className={loginButton}>
                    <Button variant="contained" fullWidth type="submit">
                      Login
                    </Button>
                  </div>
                </form>
              </Box>
            </Grid>
          </div>
        </Grid>
        <div className={copyRights}>
          <span>Powered by</span>
          <img src={saveSiteLogo} />
          <span>© 2023. All Rights Reserved</span>
        </div>
      </Grid>
    </>
  );
};

export default Login;
