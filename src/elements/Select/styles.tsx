import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(
  {
    customSelect: (props: any) => ( {
      minWidth: "100px !important",
      minheight: "5px !important",
      "& .MuiSelect-select": {
        padding: "10px 11px",
      },
      "& .MuiInputBase-root": {
        borderRadius: "50px",
        fontSize: 14,
        // lineHeight: 21,
        textAlign: "center",
        fontWeight: "bold",
        position: "relative",
        color: "#fff",
        "& .MuiSvgIcon-root": {
          position: "absolute",
          right: "10px",
        },
        
        "& .MuiOutlinedInput-notchedOutline": {
          color: "#fff",
          border: `1px solid #fff !important`,
        },
      },

      "& .MuiSelect-iconOutlined": {
        color: `#fff !important`,
      },
    }),


    tableSelect: (props: any) => ( {
      "& .MuiInputBase-root": {
        marginTop: 12,
      },
      "& .MuiSelect-select": {
        padding: "0 30px 0 0 !important",
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        display: "none !important",
      },
      "& .MuiFormLabel-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiSvgIcon-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiInput-root": {
        color: `${props?.palette?.selectElement?.colorWhite} !important`,
      },
      "& .MuiInput-root:before": {
        display: "none",
      },
      "& .MuiInput-root:after": {
        display: "none",
      },
    }),
  },
  { index: 1 }
);
export default useStyles;
