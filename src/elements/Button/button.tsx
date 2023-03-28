import React, { Fragment, useState, useEffect } from "react";
import { Button } from "@mui/material";
import theme from "../../theme/theme";
import useStyles from "./styles";

const INF_Button: React.FC<any> = (props) => {
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );

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
  const { loginButton, CustomButton, CustomButtonDisable } =
    useStyles(appTheme);
  const { variant, handleClick, type, children, disable, buttonStyles, fullWidth, color } = props;

  const handleButtonClick = () => {
    handleClick();
  };

  const[buttonTheme, setButtonTheme] = useState<any>();
  const[btnTextProperty, setbTnTextProperty]=useState<any>({fontSize : "unset", textColor: "unset"})
  const{fontSize, textColor} = btnTextProperty;
useEffect(()=>{
  setButtonTheme(JSON.parse(localStorage.getItem("colorScheme")!))
},[])



useEffect(()=>{

  if(buttonTheme){
    buttonTheme?.buttons?.map((item: any)=>{
       if(item?.name?.toLowerCase() === color?.toLowerCase()){
        setbTnTextProperty({...btnTextProperty, fontSize: item?.size ? item?.size : "unset", textColor: item?.textColor ? item?.textColor : "unset"})
       }else{
        setbTnTextProperty({...btnTextProperty, fontSize: item?.size ? item?.size : "unset", textColor: item?.textColor ? item?.textColor : "unset"})
       }
    })
  }

},[buttonTheme])
  
  return (
    <>
      <Button
        variant={variant || "outlined"}
        className={
          variant
            ? disable
              ? CustomButtonDisable
              : buttonStyles
              ? buttonStyles
              : CustomButton
            : loginButton
        }
        onClick={handleButtonClick}
        type={type}
        disabled={disable}
        color={color}
        fullWidth={fullWidth}
      >
        <span 
        style={{fontSize: `${fontSize}px`, color:textColor}}
        >{children}</span>
      </Button>
    </>
  );
};
export default INF_Button;
