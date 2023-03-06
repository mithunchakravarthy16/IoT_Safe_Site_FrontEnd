import {useState} from "react";
import {
    RootContainer,
    ZoneContainer,
    ZoneHeader,
    ZoneContent,
    ZoneTitle,
    InstrumentContainer,
    InstrumentHeader,
    InstrumentContent,
    InstrumentItemContainer,
    InstrumentItemHeader,
    FlexSpace,
    InstrumentItemBody,
    InstrumentItemBodySection,
    InstrumentItemSectionLabel,
    InstrumentItemSectionValueContainer,
    HorizontalSpace,
} from "./styles"
import IndicatorLED from "./IndicatorLed";
import {Icon} from "elements";
import { useTransition, animated } from "react-spring";

const bodySectionItems = [
    {
        label: "Temperature",
        value: "25°C",
        icon: "temperature"
    },
    {
        label: "Humidity",
        value: "40%",
        icon: "humidity"
    },
    {
        label: "Carbon Monoxide",
        value: "36Kg",
        icon: "co2"
    },
    {
        label: "VOC ‘S",
        value: "551",
        icon: "voc"
    },
    {
        label: "Particulates",
        value: "136µg/m³",
        icon: "particulates"
    },
    {
        label: "Noise",
        value: "70dBA",
        icon: "noise"
    },
    {
        label: "Pressure",
        value: "10Pa",
        icon: "pressure"
    },
    {
        label: "Light",
        value: "60%",
        icon: "light"
    },
]

const GrokList = () => {
    const [selectedInstrument, setSelectedInstrument] = useState("");

    const transitions = useTransition(selectedInstrument, {
        from: { opacity: 0, height: "0px" },
        enter: { opacity: 1, height: "auto" },
        leave: { opacity: 0, height: "0px" },
    });

    const onInstrumentClick = (id: string) => {
        setSelectedInstrument(prev => !prev?id:"")
    }

    return (
        <RootContainer>
            <ZoneContainer>
                <ZoneHeader>
                    <ZoneTitle>Zone 1</ZoneTitle>
                    <FlexSpace />
                    <Icon size={30} icon="raise-alert" />
                    <HorizontalSpace count={10} />
                    <Icon size={30} icon="call" />
                </ZoneHeader>
                <ZoneContent>
                    <InstrumentContainer>
                        <InstrumentHeader highlighted={true} onClick={() => onInstrumentClick("ins-01")} >
                            <span>Environment Sensors (2)</span>
                            <FlexSpace />
                            <IndicatorLED type='alert' />
                            <Icon size={15} style={{transform: `rotateZ(${selectedInstrument === "ins-01"?"0deg":"-90deg"})`, transition: "all 0.3s ease"}} icon="chevron-down" />
                        </InstrumentHeader>
                        {
                            selectedInstrument === "ins-01"
                            ?
                            transitions((style, show) => (
                                show
                                ?
                                <animated.div style={style} >
                                    <InstrumentContent>
                                        <InstrumentItemContainer>
                                            <InstrumentItemHeader>
                                                <span>Environmental Sensor#1</span>
                                                <FlexSpace />
                                                <IndicatorLED />
                                            </InstrumentItemHeader>
                                            <InstrumentItemBody>
                                                {
                                                    bodySectionItems.map((item: any) => (
                                                        <InstrumentItemBodySection>
                                                            <InstrumentItemSectionValueContainer>
                                                                <Icon icon={item.icon} size={20} />
                                                                <span>{item.value}</span>
                                                            </InstrumentItemSectionValueContainer>
                                                            <InstrumentItemSectionLabel>{item.label}</InstrumentItemSectionLabel>
                                                        </InstrumentItemBodySection>
                                                    ))
                                                }
                                            </InstrumentItemBody>
                                        </InstrumentItemContainer>
                                        <InstrumentItemContainer>
                                            <InstrumentItemHeader>
                                                <span>Environmental Sensor#1</span>
                                                <FlexSpace />
                                                <IndicatorLED />
                                            </InstrumentItemHeader>
                                            <InstrumentItemBody>
                                                {
                                                    bodySectionItems.map((item: any) => (
                                                        <InstrumentItemBodySection>
                                                            <InstrumentItemSectionValueContainer>
                                                                <Icon icon={item.icon} size={20} />
                                                                <span>{item.value}</span>
                                                            </InstrumentItemSectionValueContainer>
                                                            <InstrumentItemSectionLabel>{item.label}</InstrumentItemSectionLabel>
                                                        </InstrumentItemBodySection>
                                                    ))
                                                }
                                            </InstrumentItemBody>
                                        </InstrumentItemContainer>
                                    </InstrumentContent>
                                </animated.div>
                                :
                                null
                            ))
                            :
                            null
                        }
                    </InstrumentContainer>
                </ZoneContent>
            </ZoneContainer>
        </RootContainer>
    )
}

export default GrokList;