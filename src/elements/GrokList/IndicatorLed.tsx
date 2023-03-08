import {useState, useEffect} from 'react';
import {styled} from "@mui/material/styles";
import theme from "theme/theme";

const RootContainer = styled("div")`
    border-radius: 5px;
    margin: 0px 10px;
    background-color: ${(props: any) => theme.defaultTheme?.palette?.grokList?.zoneHeaderBackground};
    display: flex;
    padding: 6px 7px;
`;

const Box = styled("div")<{fill?: string, stroke?: string}>`
    width: 8px;
    height: 11px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({stroke}) => stroke || theme.defaultTheme.palette.grokList.defaultStroke};
    background-color: ${({fill}) => fill || "transparent"};
    margin-right: 5px;
    border-radius: 1px;

    &:last-child {
        margin-right: 0px;
    }
`;

type Props = {
    type?: string,
}

const indicatorListEmpty = Array.from(Array(4).keys())

const IndicatorLED = (props: Props) => {
    const [indicatorColors, setIndicatorColors] = useState<{index?: number, fill: string, stroke: string} | any>();

    const getIndicator = (type: string | undefined) => {
        switch(type) {
            case 'alert':
                return {fill: theme.defaultTheme.palette.grokList.alertFill, stroke: theme.defaultTheme.palette.grokList.alertStroke, index: 1}
            
            case 'operation':
                return {fill: theme.defaultTheme.palette.grokList.operationsFill, stroke: theme.defaultTheme.palette.grokList.operationsStroke, index: 2}

            case 'event':
                return {fill: theme.defaultTheme.palette.grokList.eventsFill, stroke: theme.defaultTheme.palette.grokList.eventsStroke, index: 0}

            case 'unavailable':
                return {fill: theme.defaultTheme.palette.grokList.unavailableFill, stroke: theme.defaultTheme.palette.grokList.unavailableStroke, index: 3}
            
            default:
                return {fill: null, stroke: null}
        }
    }

    useEffect(() => {
        setIndicatorColors(getIndicator(props.type))
    }, [])

    return (
        <RootContainer>
            {
                indicatorListEmpty.map((empty: any, index: number) => {
                    if(index === indicatorColors?.index) {
                        return <Box key={index} fill={indicatorColors.fill} stroke={indicatorColors.stroke} />
                    }

                    return <Box key={index} />
                })
            }
        </RootContainer>
    )
}

export default IndicatorLED;