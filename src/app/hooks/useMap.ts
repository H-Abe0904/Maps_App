import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function useMap() {
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    if (map) return; // 既にマップがある場合は再生成しない

    // Map の初期化
    const mapInstance = L.map("map").setView([35.681236, 139.767125], 12);

    // OpenStreetMap のタイルレイヤーを追加
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    // 東京駅にピンを立てる
    L.marker([35.681236, 139.767125])
      .addTo(mapInstance)
      .bindPopup("東京駅")
      .openPopup();

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  return { map };
}
