import { useState, useEffect } from "react";
import theme from "theme/theme";
import {
  GoogleMap,
  OverlayViewF,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import appData from "data/appData";
import { mapContainerStyles, RootContainer, mapStyleWidth } from "./styles";
import AICameraIcon from "assets/aiCameraIcon.svg";
import EnvSensorsIcon from "assets/envSensorIcon.svg";
import FloodSensorsIcon from "assets/floodSensorIcon.svg";
import AlertIcons from "assets/AlertsIcons";
import InfoBox from "elements/InfoBox";
import useStyles from "./styles";
import InfoDialog from "components/InfoDialog";

const defaultCenter = {
  lat: 39.954772903926305,
  lng: -75.1910444396549,
};

const Map: React.FC<any> = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState<any>(theme?.defaultTheme);
  const { overlayViewBox } = useStyles(appTheme);

  const {
    markers,
    marker,
    setSelectedNotification,
    setTabIndex,
    searchOpen,
    setSearchOpen,
    pageName,
  } = props;

  const [showInfoDialogue, setShowInfoDialogue] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedId, setSelectedId] = useState<any>();
  const [selectedTitle, setSelectedTitle] = useState<string>();

  const handleInfoDialogue = (type: string, id: any) => {
    if (pageName === "Dashboard") {
      setShowInfoDialogue(true);
      setSelectedType(type);
      setSelectedId(id);
    } else if (pageName === "Alerts") {
      setSelectedTitle(type);
      setShowInfoDialogue(true);
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleMapApiKey,
    libraries: ["places"],
  });

  const [currentMarker, setCurrentMarker] = useState<any>(marker);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    setCurrentMarker(marker);
  }, [marker]);

  useEffect(() => {
    if (currentMarker) {
      const index = markers?.findIndex(
        (marker: any) => marker.index === currentMarker
      );

      if (
        markers &&
        markers[index]?.location?.lat &&
        markers[index]?.location?.lng
      ) {
        map?.panTo(markers[index]?.location);
      }
    }
  }, [currentMarker]);

  const getMapTypeControls: any = () => {
    const defaultMapOptions = {
      mapTypeId: "roadmap",
      disableDefaultUI: true,
      styles: mapContainerStyles,
    };

    if (!window?.google) {
      return defaultMapOptions;
    }

    return {
      ...defaultMapOptions,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.LEFT_BOTTOM,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      rotateControl: true,
    };
  };

  const toggleInfoWindow = (
    markerId: string,
    location: any,
    category: string,
    IsMarkerCloseClicked: any
  ) => {
    setCurrentMarker((prev: any) => {
      if (prev && prev === markerId && IsMarkerCloseClicked) {
        map?.panTo(defaultCenter);
        return "";
      } else {
        map?.panTo(location);
        return markerId;
      }
    });
    setTabIndex(
      pageName === "Dashboard"
        ? category === "aiCameras"
          ? 0
          : category === "envrSensors"
          ? 1
          : 2
        : pageName === "Alerts"
        ? category === "events"
          ? 0
          : category === "alerts"
          ? 1
          : 2
        : ""
    );
    setSelectedNotification((prev: any) => {
      return prev && prev == markerId ? "" : markerId;
    });
    setSearchOpen(false);
  };

  const getMarkerIcon = (category: string, subCategory: string) => {
    if (pageName === "Dashboard") {
      switch (category) {
        case "aiCameras":
          return AICameraIcon;
        case "envrSensors":
          return EnvSensorsIcon;
        case "floodSensors":
          return FloodSensorsIcon;
        default:
          return AICameraIcon;
      }
    } else {
      switch (category) {
        case "events":
          switch (subCategory) {
            case "aiCameras":
              return AlertIcons?.eventsAICamera;
            case "envSensors":
              return AlertIcons?.eventsEnvSensor;
            case "floodSensors":
              return AlertIcons?.eventsFloodSensor;
            default:
              return AlertIcons?.eventsAICamera;
          }
        case "alerts":
          switch (subCategory) {
            case "aiCameras":
              return AlertIcons?.alertsAICamera;
            case "envSensors":
              return AlertIcons?.alertsEnvSensor;
            case "floodSensors":
              return AlertIcons?.alertsFloodSensor;
            default:
              return AlertIcons?.alertsAICamera;
          }
        case "operations":
          switch (subCategory) {
            case "aiCameras":
              return AlertIcons?.operationsAICamera;
            case "envSensors":
              return AlertIcons?.operationsEnvSensor;
            case "floodSensors":
              return AlertIcons?.operationsFloodSensor;
            default:
              return AlertIcons?.operationsAICamera;
          }
        default:
          return AlertIcons?.eventsAICamera;
      }
    }
  };

  return (
    <RootContainer>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyles}
          center={defaultCenter}
          zoom={20}
          tilt={45}
          mapTypeId={"roadmap"}
          onLoad={setMap}
          options={getMapTypeControls()}
        >
          {markers?.map((singleMarker: any) => {
            if (!window.google) return null;
            return (
              <>
                {singleMarker?.location?.lat !== "" &&
                singleMarker?.location?.lat !== undefined &&
                singleMarker?.location?.lng !== "" &&
                singleMarker?.location?.lat !== undefined &&
                singleMarker?.index ? (
                  <Marker
                    position={singleMarker?.location}
                    onClick={() => {
                      toggleInfoWindow(
                        singleMarker?.index,
                        singleMarker?.location,
                        singleMarker?.category,
                        false
                      );
                    }}
                    icon={{
                      url: getMarkerIcon(
                        singleMarker.category,
                        singleMarker.subCategory
                      ),
                      scaledSize: new window.google.maps.Size(38.5, 45.5),
                    }}
                    key={singleMarker?.index}
                    zIndex={currentMarker === singleMarker?.index ? 1000 : 1}
                  ></Marker>
                ) : null}
                {singleMarker?.location?.lat !== "" &&
                singleMarker?.location?.lat !== undefined &&
                singleMarker?.location.lng !== "" &&
                singleMarker?.location?.lat !== undefined &&
                currentMarker === singleMarker?.index ? (
                  <OverlayViewF
                    position={singleMarker?.location}
                    mapPaneName={"overlayMouseTarget"}
                    key={singleMarker?.index}
                  >
                    <InfoBox
                      data={singleMarker}
                      toggleInfoWindow={toggleInfoWindow}
                      singleMarkerId={singleMarker?.index}
                      singleMarkerLocation={singleMarker?.location}
                      singleCategory={singleMarker?.category}
                      key={singleMarker?.index}
                      pageName={pageName}
                      handleInfoDialogue={handleInfoDialogue}
                    />
                  </OverlayViewF>
                ) : null}
              </>
            );
          })}
        </GoogleMap>
      )}
      {showInfoDialogue && (
        <InfoDialog
          selectedType={pageName === "Dashboard" ? selectedType : ""}
          selectedId={pageName === "Dashboard" ? selectedId : ""}
          setShowInfoDialogue={setShowInfoDialogue}
          pageName={pageName === "Alerts" ? "alerts" : ""}
          selectedTitle={pageName === "Alerts" ? selectedTitle : ""}
        />
      )}
    </RootContainer>
  );
};

export default Map;
