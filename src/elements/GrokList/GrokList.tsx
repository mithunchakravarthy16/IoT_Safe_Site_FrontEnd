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
    ZoneActionButtons,
    InstrumentExpandIcon,
} from "./styles"
import IndicatorLED from "./IndicatorLed";
import {Icon} from "elements";

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
    return (
        <RootContainer>
            <ZoneContainer>
                <ZoneHeader>
                    <ZoneTitle>Zone 1</ZoneTitle>
                    <FlexSpace />
                    <ZoneActionButtons icon="raise-alert" />
                    <ZoneActionButtons icon="call" />
                </ZoneHeader>
                <ZoneContent>
                    <InstrumentContainer>
                        <InstrumentHeader highlighted={true} >
                            <span>Environment Sensors (2)</span>
                            <FlexSpace />
                            <IndicatorLED type='alert' />
                            <InstrumentExpandIcon expanded={false} icon="chevron-down" />
                        </InstrumentHeader>
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
                    </InstrumentContainer>
                </ZoneContent>
            </ZoneContainer>
        </RootContainer>
    )
}

export default GrokList;