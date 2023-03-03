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

  const { markers, marker, setSelectedNotification, setTabIndex, pageName } =
    props;

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
        (marker: any) => marker.id === currentMarker
      );

      map?.panTo(markers[index]?.location);
    }
  }, [currentMarker]);

  const getMapTypeControls: any = () => {
    const defaultMapOptions = {
      mapTypeId: "satellite",
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
          mapTypeId={"satellite"}
          onLoad={setMap}
          options={getMapTypeControls()}
        >
          {markers?.map((singleMarker: any) => {
            if (!window.google) return null;
            return (
              <>
                {singleMarker.id ? (
                  <Marker
                    position={singleMarker?.location}
                    onClick={() => {
                      toggleInfoWindow(
                        singleMarker.id,
                        singleMarker?.location,
                        singleMarker.category,
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
                    key={singleMarker.id}
                    zIndex={currentMarker === singleMarker.id ? 1000 : 1}
                  ></Marker>
                ) : null}
                {currentMarker === singleMarker.id ? (
                  <OverlayViewF
                    position={singleMarker?.location}
                    mapPaneName={"overlayMouseTarget"}
                    key={singleMarker.id}
                  >
                    <InfoBox
                      data={singleMarker}
                      toggleInfoWindow={toggleInfoWindow}
                      singleMarkerId={singleMarker.id}
                      singleMarkerLocation={singleMarker?.location}
                      singleCategory={singleMarker.category}
                      key={singleMarker.id}
                      pageName={pageName}
                    />
                  </OverlayViewF>
                ) : null}
              </>
            );
          })}
        </GoogleMap>
      )}
    </RootContainer>
  );
};

export default Map;
