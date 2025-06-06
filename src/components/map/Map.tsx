import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const mapStyles = [
  {
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#2D5C76" }]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#9f193f" }]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [{ color: "#9f193f" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2D5C76" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#2D5C76" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#e6f3ff" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#2D5C76" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#2D5C76" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2D5C76" }]
  }
];

interface MapProps {
  height?: string;
}

const Map: React.FC<MapProps> = ({ height }) => {
  const officeLocation = {
    lat: 23.1291,  // Guangzhou latitude
    lng: 113.2644  // Guangzhou longitude
  };

  const containerStyle = {
    width: "100%",
    height: height || "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCaAnlPllExl2Yuk5G6RENFb0zlBQUXFWY",
  });

  if (!isLoaded) return null;

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={{ ...containerStyle, position: 'relative', zIndex: 1 }}
        center={officeLocation}
        zoom={12}
        options={{
          styles: mapStyles,
          disableDefaultUI: false,
          backgroundColor: '#cccccc',
          zoomControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
          minZoom: 3,
        }}
      >
        <Marker
          label={{
            text: "Our Office - Guangzhou",
            color: "#9f193f",
            className: "watertowertext",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          icon={{
            url: "/images/default-pin.png",
            scaledSize: new window.google.maps.Size(28, 28),
          }}
          position={officeLocation}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
