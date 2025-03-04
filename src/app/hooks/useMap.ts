import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  id: string;
  latitude: number;
  longitude: number;
}

export function useMap(locations: Location[]) {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    // Map の初期化
    const mapInstance = L.map("map").setView([35.681236, 139.767125], 12);

    // OpenStreetMap のタイルレイヤーを追加
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        L.marker([location.latitude, location.longitude]).addTo(map);
      });
    }
  }, [map, locations]);

  return { map };
}
