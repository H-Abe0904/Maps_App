"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mapInstance = L.map("map").setView([35.681236, 139.767125], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    L.marker([35.681236, 139.767125], {
      icon: L.icon({
        iconUrl: "/marker-icon.png",
        shadowUrl: "/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }),
    })
      .addTo(mapInstance)
      .bindPopup("東京駅")
      .openPopup();

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
}
