import { styled } from "@mui/material/styles";
import theme from "theme/theme";

export const RootContainer = styled("div")`
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    overflow: scroll;
`;

export const ZoneContainer = styled("div")`
    width: calc(100% - 40px);
    background-color: ${(props: any) => theme.defaultTheme?.palette?.grokList?.zoneContainerBackground};
    margin-bottom: 20px;
    border-radius: 3px;

    &:last-child {
        margin-bottom: 0px;
    }
`;

export const ZoneTitle = styled("div")`
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.defaultTheme.palette.grokList.defaultFontColor};
`;

export const ZoneHeader = styled("div")`
    border-radius: 3px 3px 0px 0px;
    background-color: ${(props: any) => theme.defaultTheme?.palette?.grokList?.zoneHeaderBackground};
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ZoneContent = styled("div")`
    padding: 15px 12px;
`;

export const InstrumentContainer = styled("div")`
    border-radius: 3px;
    width: calc(100% - 24px);
    margin-bottom: 10px;
    background-color: ${theme.defaultTheme.palette.grokList.instrumentCollapsedBackground};

    &:last-child {
        margin-bottom: 0px;
    }
`;

export const InstrumentHeader = styled("div")<{highlighted?: boolean}>`
    border-radius: 3px 3px 0px 0px;
    background-color: ${theme.defaultTheme.palette.grokList.instrumentCollapsedBackground};
    color: ${({ highlighted }) => highlighted?theme.defaultTheme.palette.grokList.highlightedFontColor:theme.defaultTheme.palette.grokList.defaultFontColor};
    padding: 12px 16px;
    display: flex;
    align-items: center;

    span {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const InstrumentContent = styled("div")`
    padding: 15px;
`;

export const InstrumentItemContainer = styled("div")`
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`;

export const InstrumentItemHeader = styled("div")`
    display: flex;
    align-items: center;
    
    span {
        color: ${theme.defaultTheme.palette.grokList.defaultFontColor};
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 128%;
    }
`;

export const FlexSpace = styled("div")`
    flex: 1
`;