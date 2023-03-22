import {useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Tooltip from "elements/Tooltip";
import { useTransition, animated } from "react-spring";
import useTranslation from "localization/translations";
// import mockData from "mockdata/grokEyeZonesList";


const GrokList = (props: any) => {
    const {
        currentOpenAlert,
        setCurrentOpenAlert,
        currentOpenInstrument,
        setCurrentOpenInstrument
    } = props;

    const {raiseAlert, call} = useTranslation()
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const rootContainerRef = useRef<any>(null);
 
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch({
          type: "GET_GORK_EYE_ZONE_LIST_DATA",
          payload: {},
        });
      }, []);

      const grokListAPIData = useSelector(
        (state: any) => state?.gorkEyeZonesListResponse?.gorkEyeZonesListDataValue
      );

      const grokEyeZoneList = grokListAPIData;

    const transitions = useTransition(currentOpenInstrument, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const onInstrumentClick = (id: string, zone: string) => {
        setCurrentOpenAlert("")
        setCurrentOpenInstrument((prev: any) => {
            if(prev === id) {
                if(rootContainerRef?.current) {
                    rootContainerRef.current.scrollTop = prevScrollPosition
                }
                return ""
            }
            setPrevScrollPosition(rootContainerRef?.current?.scrollTop || 0)
            return id
        })

        const container = document.getElementById(`instr-${id}`)
        container?.scrollIntoView({behavior: 'smooth', block: 'start'})

        if(zone === grokEyeZoneList[grokEyeZoneList.length-1].id) {
            rootContainerRef.current.scrollTop = rootContainerRef.current.clientHeight
        }
    }

    return (
        <RootContainer ref={rootContainerRef} >
            {
                grokEyeZoneList && grokEyeZoneList.length > 0 && grokEyeZoneList?.map((zone: any) => (
                    <ZoneContainer key={zone?.id} >
                        <ZoneHeader>
                            <ZoneTitle>{zone.name}</ZoneTitle>
                            <FlexSpace />
                            <Tooltip tooltipValue={raiseAlert}>
                                <Icon size={30} icon="raise-alert" />
                            </Tooltip>
                            <HorizontalSpace count={10} />
                            <Tooltip tooltipValue={call}>
                                <Icon size={30} icon="call" />
                            </Tooltip>
                        </ZoneHeader>
                        <ZoneContent>
                            {
                                zone.instruments.map((instrument:any) => (
                                    <InstrumentContainer key={instrument?.id} >
                                        <InstrumentHeader highlighted={instrument.id === currentOpenInstrument} onClick={() => onInstrumentClick(instrument.id, zone.id)} >
                                            <span>{instrument.name} ({instrument.sensors.length})</span>
                                            <FlexSpace />
                                            <IndicatorLED type={instrument.indicator} />
                                            <Icon size={15} style={{transform: `rotateZ(${currentOpenInstrument === instrument.id?"0deg":"-90deg"})`, transition: "all 0.3s ease"}} icon="chevron-down" />
                                        </InstrumentHeader>
                                        {
                                            currentOpenInstrument === instrument.id
                                            ?
                                            transitions((style, show) => (
                                                show
                                                ?
                                                <animated.div style={style} >
                                                    <InstrumentContent>
                                                        {
                                                            instrument.sensors.map((sensor:any) => (
                                                                <InstrumentItemContainer key={sensor.id} >
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
                                        <div id={`instr-${instrument.id}`} ></div>
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