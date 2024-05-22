"use client";
import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styles from './Location.module.scss';

type Location = {
    name: string;
    address: string;
    phone: string;
    lat: number;
    lng: number;
}
const locations: Location[] = [
  {
    name: "Melbourne",
    address: "100 Flinders Street, Melbourne VIC 3000 AU",
    phone: "+1 234 567-8900",
    lat: -37.8136,
    lng: 144.9631,
  },
  {
    name: "Sydney",
    address: "100 George Street, Sydney NSW 2000 AU",
    phone: "+1 234 567-8900",
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    name: "California",
    address: "100 George Street, Sydney NSW 2000 AU",
    phone: "+1 234 567-8900",
    lat: 36.7783,
    lng: -119.4179,
  },
  {
    name: "Baku",
    address: "100 George Street, Sydney NSW 2000 AU",
    phone: "+1 234 567-8900",
    lat: 40.4093,
    lng: 49.8671,
  },
  {
    name: "Istanbul",
    address: "100 George Street, Sydney NSW 2000 AU",
    phone: "+1 234 567-8900",
    lat: 41.0082,
    lng: 28.9784,
  },
];
const mapOptions = {
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#ffffff" }],
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#c3d3df" }],
      },
    ],
  };

const LocationPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleLocationClick = (location:any) => {
    setSelectedLocation(location);
  };

  const mapStyles = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Locations</h2>
      <p className={styles.subtitle}>
        Say hello to our friendly and professional team at one of these locations.
      </p>
      <div className={styles.locationCards}>
        {locations.map((location) => (
          <div
            key={location.name}
            onClick={() => handleLocationClick(location)}
            className={`${styles.locationCard} ${selectedLocation.name === location.name ? styles.selected : ''}`}
          >
            <h3 className={styles.locationName}>{location.name}</h3>
            <p className={styles.locationAddress}>{location.address}</p>
            <p className={styles.locationPhone}>{location.phone}</p>
            <button className={styles.startButton}>Start a Repair</button>
          </div>
        ))}
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          options={mapOptions}
          center={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
          mapContainerClassName={styles.mapContainer}
        >
          <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default LocationPage;
