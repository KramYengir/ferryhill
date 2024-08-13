"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 53.4480571, // Your latitude
  lng: -2.4160282, // Your longitude
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const GoogleMapsComponent: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Google Maps API key is not defined in environment variables."
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="w-full h-96 lg:h-full">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }} // Ensures map takes full container size
          center={center}
          zoom={14}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
