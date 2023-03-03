import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")`
  display: flex;
  align-items: center;

  // @media (max-width: 767px) {
  //   flex-wrap: wrap;
  // }
`;

export const ItemSubContainer1 = styled("div")``;

export const ItemSubContainer2 = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const ItemContainer = styled("div")<{ infoDialogueType: boolean }>`
  background: #060606;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  // flex: 1;
  padding: ${(props) =>
    props?.infoDialogueType ? "12px 15px 19px 15px" : "0px 15px 19px 15px"};

  // @media (max-width: 1537px) : {
  //   height: 60px;
  // }
  // @media (max-width: 1680px) {
  //   height: 54px;
  //   padding: 10px;
  // }

  // @media (max-width: 767px) {
  //   flex: 1 1 50%;
  // }
  // @media (max-height: 720px) {
  //   height: 50px;
  //   padding: 5px 5px 12px 5px;
  // }
  // @media (max-width: 430px) {
  //   flex: 1 1 100%;
  // }
  // :nth-child(7) {
  //   padding: 20px 20px 0px 20px;
  //   height: 80px;
  // }
  // :nth-child(8) {
  //   padding: 20px 20px 0px 20px;
  //   height: 80px;
  // }
`;

export const ItemValue = styled("div")<{ paletteColor: string }>`
  color: ${(props) => (props?.paletteColor ? props?.paletteColor : null)};
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 6px;
  // @media (max-width: 1280px) {
  //   font-size: 10px;
  //   line-height: 16px;
  // }
`;

export const ItemLabel = styled("div")<{ paletteColor: string }>`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => (props?.paletteColor ? props?.paletteColor : null)};
  // @media (max-width: 1280px) {
  //   font-size: 9px;
  //   line-height: 14px;
  // }
`;

export const VerticalSpace = styled("div")<{ count: number }>`
  height: ${(props) => (props.count ? props.count * 4 : null)}px;
`;
