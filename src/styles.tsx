import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")<{ fontFamily: string }>`
  font-family: ${(props) => props?.fontFamily};
`;
