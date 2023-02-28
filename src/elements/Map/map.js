import {
  GoogleMap,
  OverlayViewF,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import appData from "data/appData";
import { mapContainerStyles, RootContainer, mapStyleWidth } from "./styles";

const defaultCenter = {
  lat: 39.954772903926305,
  lng: -75.1910444396549,
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: appData?.googleMapApiKey,
    libraries: ["places"],
  });

  const getMapTypeControls = () => {
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

  return (
    <RootContainer>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyles}
          center={defaultCenter}
          zoom={20}
          tilt={45}
          mapTypeId={"satellite"}
          options={getMapTypeControls()}
        ></GoogleMap>
      )}
    </RootContainer>
  );
};

export default Map;
