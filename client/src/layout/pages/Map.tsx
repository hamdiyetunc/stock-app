import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { getDistance } from "geolib";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Defaults to San Francisco, CA
  lng: -122.4194,
};

interface Store {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const storesData: Store[] = [
  { id: 1, name: "Store 1", latitude: 37.7749, longitude: -122.4194 },
  { id: 2, name: "Store 2", latitude: 37.8044, longitude: -122.2711 },
  { id: 3, name: "Store 3", latitude: 37.7841, longitude: -122.4018 },
];

const Map: React.FC = () => {
  const [stores, setStores] = useState<Store[]>(storesData);
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  useEffect(() => {
    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      // Sort dealers by distance
      const sortedStores = [...stores].sort((a, b) => {
        const distanceA = getDistance(currentLocation, {
          latitude: a.latitude,
          longitude: a.longitude,
        });
        const distanceB = getDistance(currentLocation, {
          latitude: b.latitude,
          longitude: b.longitude,
        });
        return distanceA - distanceB;
      });
      setStores(sortedStores);
    }
  }, [currentLocation]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-[#0077b6] my-4">
        Stores - Find the Nearest
      </h1>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation || center}
          zoom={12}
        >
          {stores.map((store) => (
            <Marker
              key={store.id}
              position={{ lat: store.latitude, lng: store.longitude }}
              onClick={() => setSelectedStore(store)}
            />
          ))}

          {selectedStore && (
            <InfoWindow
              position={{
                lat: selectedStore.latitude,
                lng: selectedStore.longitude,
              }}
              onCloseClick={() => setSelectedStore(null)}
            >
              <div>
                <h3>{selectedStore.name}</h3>
                <p>Latitude: {selectedStore.latitude}</p>
                <p>Longitude: {selectedStore.longitude}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      <div className="mt-4 p-4">
        <h2 className="font-bold text-xl text-[#0077b6]">
          Stores List (Sorted by Proximity)
        </h2>
        <ul>
          {stores.map((store) => (
            <li key={store.id} className="mt-2">
              <strong>{store.name}</strong> - Latitude: {store.latitude},
              Longitude: {store.longitude}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;
