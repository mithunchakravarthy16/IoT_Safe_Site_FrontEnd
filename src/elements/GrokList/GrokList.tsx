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
} from "./styles"
import IndicatorLED from "./IndicatorLed";

const GrokList = () => {
    return (
        <RootContainer>
            <ZoneContainer>
                <ZoneHeader>
                    <ZoneTitle>Zone 1</ZoneTitle>
                </ZoneHeader>
                <ZoneContent>
                    <InstrumentContainer>
                        <InstrumentHeader highlighted={true} >
                            <span>Environment Sensors (2)</span>
                            <FlexSpace />
                            <IndicatorLED type='alert' />
                        </InstrumentHeader>
                        <InstrumentContent>
                            <InstrumentItemContainer>
                                <InstrumentItemHeader>
                                    <span>Environmental Sensor#1</span>
                                    <FlexSpace />
                                    <IndicatorLED />
                                </InstrumentItemHeader>
                            </InstrumentItemContainer>
                        </InstrumentContent>
                    </InstrumentContainer>
                </ZoneContent>
            </ZoneContainer>
        </RootContainer>
    )
}

export default GrokList;