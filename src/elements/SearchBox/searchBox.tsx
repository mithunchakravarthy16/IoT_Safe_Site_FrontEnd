import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../theme/theme";
import useStyles from "./style";
import { useState, useRef, useCallback, useEffect } from "react";
const INF_SearchBox: React.FC<any> = (props) => {
  const {
    placeHolder,
    handleSearch,
    borderRadius,
    borderColor,
    searchIsOpen,
    searchResetValue,
    searchInput,
    tabIndex,
    fontColor,
  } = props;

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

  const [searchValue, setSearchValue] = useState<any>();
  const [icon, setIcon] = useState<any>("search");
  const [searchFocus, setSearchFocus] = useState<any>(props.searchIsOpen);

  const textInput = React.createRef<any>();

  const handleClose = () => {
    setSearchValue("");
    handleSearch("");
    setIcon("search");
  };
  const handleInput = (event: any) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setIcon("cancel");
    }
    handleSearch(event.target.value);
  };
  const handleSearchFocus = () => {
    setSearchFocus(true);
  };

  useEffect(() => {
    if (searchFocus === true || searchIsOpen === true) {
      textInput.current.focus();
      setSearchFocus(false);
    }
  }, [searchFocus, searchIsOpen]);

  useEffect(() => {
    setSearchValue("");
  }, [searchResetValue]);

  useEffect(() => {
    setSearchValue("");
    setIcon("search");
    handleSearch("");
  }, [tabIndex]);

  return (
    <>
      <div className={searchInput}>
        <InputBase
          fullWidth
          inputRef={textInput}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
            }
          }}
          sx={{
            ml: 1,
            flex: 1,
            color: fontColor,
          }}
          placeholder={placeHolder}
          onChange={handleInput}
          value={searchValue}
          endAdornment={
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              {icon === "search" ? (
                <SearchIcon
                  onClick={handleSearchFocus}
                  onChange={handleInput}
                  sx={{ color: fontColor }}
                />
              ) : (
                <CloseIcon onClick={handleClose} sx={{ fill: fontColor }} />
              )}
            </IconButton>
          }
        />
      </div>
    </>
  );
};
export default INF_SearchBox;
