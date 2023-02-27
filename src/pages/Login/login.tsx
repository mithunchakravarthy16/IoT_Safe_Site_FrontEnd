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

  useEffect(() => {
    if (user && user?.userName) {
      localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
      navigate("/dashboard");
    }
  }, [user]);

  const handleLogin = () =>{
    let payload = {
              userName: 'mikeross@qualcomm.com',
              passWord: 'admin'
            };
    dispatch(getUserLogin(payload));
  }

  // const formik = useFormik({
  //   initialValues: {
  //     userid: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     userid: Yup.string()
  //       .min(2, "Mininum 2 characters")
  //       .required(" Please enter the user email address"),
  //     password: Yup.string()
  //       .min(2, "Mininum 2 characters")
  //       .max(15, "Maximum 15 characters")
  //       .required("Please enter the password"),
  //   }),
  //   onSubmit: (values) => {
  //     if (
  //       ((values?.userid).toLowerCase() === "mikeross@qualcomm.com" &&
  //         values?.password === "Mike@2023") ||
  //       ((values?.userid).toLowerCase() === "jessica@qualcomm.com" &&
  //         values?.password === "Jessica@2023") ||
  //       ((values?.userid).toLowerCase() === "louislitt@qualcomm.com" &&
  //         values?.password === "Louis@2023") ||
  //       ((values?.userid).toLowerCase() === "emmapalmer@qualcomm.com" &&
  //         values?.password === "Emma@2023") ||
  //       ((values?.userid).toLowerCase() === "harveyspecter@qualcomm.com" &&
  //         values?.password === "Harvey@2023")
  //     ) {
  //       let payload = {
  //         userName: values.userid?.toLowerCase(),
  //         passWord: values.password?.toLowerCase(),
  //       };
  //       dispatch(getUserLogin(payload));
  //     } else {
  //       alert("Incorrect User Credentials");
  //     }
  //   },
  // });

  // const handlePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };


  return (
    <>
    <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Login;
