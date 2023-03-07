import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")`
  display: flex;
  align-items: center;

 
`;

export const ItemSubContainer1 = styled("div")``;

export const ItemSubContainer2 = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const ItemContainer = styled("div")<{ infoDialogueType: boolean, paletteColor: string}>`
  background:  ${(props) => (props?.paletteColor ? props?.paletteColor : null)}; 
  align-items: center;
  justify-content: flex-start;
  display: flex;
  
  padding: ${(props) =>
    props?.infoDialogueType ? "12px 15px 19px 15px" : "0px 15px 19px 15px"};

  
`;

export const ItemValue = styled("div")<{ paletteColor: string }>`
  color: ${(props) => (props?.paletteColor ? props?.paletteColor : null)};
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 6px;
  
`;

export const ItemLabel = styled("div")<{ paletteColor: string }>`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props?.paletteColor ? props?.paletteColor : null)};
  
`;

export const VerticalSpace = styled("div")<{ count: number }>`
  height: ${(props) => (props.count ? props.count * 4 : null)}px;
`;
