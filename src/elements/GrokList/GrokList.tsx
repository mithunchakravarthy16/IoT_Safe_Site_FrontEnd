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

const sampleMock = [
    {
        id: "zone-01",
        name: "Zone 1",
        instruments: [
            {
                id: "instrument-01",
                indicator: "alert",
                name: "Environmental Sensors",
                sensors: [
                    {
                        indicator: "alert",
                        name: "Environmental Sensor #1",
                        bodySectionItems: [
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
                    },
                    {
                        indicator: "null",
                        name: "Environmental Sensor #2",
                        bodySectionItems: [
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
                    }
                ]
            },
            {
                id: "instrument-02",
                indicator: "alert",
                name: "Flood Sensors",
                sensors: [
                    {
                        indicator: "alert",
                        name: "Flood Sensor #1",
                        bodySectionItems: [
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
                    }
                ]
            }
        ]
    },
    {
        id: "zone-02",
        name: "Zone 2",
        instruments: [
            {
                id: "instrument-03",
                indicator: "alert",
                name: "Environmental Sensors",
                sensors: [
                    {
                        indicator: "alert",
                        name: "Environmental Sensor #1",
                        bodySectionItems: [
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
                    },
                    {
                        indicator: "alert",
                        name: "Environmental Sensor #2",
                        bodySectionItems: [
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
                    }
                ]
            },
            {
                id: "instrument-04",
                indicator: "alert",
                name: "Flood Sensors",
                sensors: [
                    {
                        indicator: "alert",
                        name: "Flood Sensor #1",
                        bodySectionItems: [
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
                    }
                ]
            }
        ]
    }
]

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
                                        <InstrumentHeader highlighted={true} onClick={() => onInstrumentClick(instrument.id)} >
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