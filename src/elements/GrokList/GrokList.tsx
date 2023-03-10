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
import mockData from "mockdata/grokEyeZonesList";

const GrokList = () => {
    const [selectedInstrument, setSelectedInstrument] = useState("");

    const transitions = useTransition(selectedInstrument, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const onInstrumentClick = (id: string) => {
        setSelectedInstrument(prev => {
            if(prev === id) {
                return ""
            }

            return id
        })
    }

    return (
        <RootContainer>
            {
                mockData.map(zone => (
                    <ZoneContainer>
                        <ZoneHeader>
                            <ZoneTitle>{zone.name}</ZoneTitle>
                            <FlexSpace />
                            <Icon size={30} icon="raise-alert" />
                            <HorizontalSpace count={10} />
                            <Icon size={30} icon="call" />
                        </ZoneHeader>
                        <ZoneContent>
                            {
                                zone.instruments.map(instrument => (
                                    <InstrumentContainer>
                                        <InstrumentHeader highlighted={instrument.id === selectedInstrument} onClick={() => onInstrumentClick(instrument.id)} >
                                            <span>{instrument.name} ({instrument.sensors.length})</span>
                                            <FlexSpace />
                                            <IndicatorLED type={instrument.indicator} />
                                            <Icon size={15} style={{transform: `rotateZ(${selectedInstrument === instrument.id?"0deg":"-90deg"})`, transition: "all 0.3s ease"}} icon="chevron-down" />
                                        </InstrumentHeader>
                                        {
                                            selectedInstrument === instrument.id
                                            ?
                                            transitions((style, show) => (
                                                show
                                                ?
                                                <animated.div style={style} >
                                                    <InstrumentContent>
                                                        {
                                                            instrument.sensors.map(sensor => (
                                                                <InstrumentItemContainer>
                                                                    <InstrumentItemHeader>
                                                                        <span>{sensor.name}</span>
                                                                        <FlexSpace />
                                                                        <IndicatorLED />
                                                                    </InstrumentItemHeader>
                                                                    <InstrumentItemBody>
                                                                        {
                                                                            sensor.bodySectionItems.map((item: any) => (
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
                                                            ))
                                                        }
                                                    </InstrumentContent>
                                                </animated.div>
                                                :
                                                null
                                            ))
                                            :
                                            null
                                        }
                                    </InstrumentContainer>
                                ))
                            }
                        </ZoneContent>
                    </ZoneContainer>
                ))
            }
        </RootContainer>
    )
}

export default GrokList;