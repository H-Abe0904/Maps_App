"use client";

import useMap from "..//hooks/useMap";
import useMapMarkers from "../hooks/useMarker";

const locations = [
  { id: "1", latitude: 35.681236, longitude: 139.767125 }, // 東京駅
  { id: "2", latitude: 35.6895, longitude: 139.6917 }, // 新宿
];

export default function LocationPage() {
  const map = useMap("map", [139.767125, 35.681236], 12);
  useMapMarkers(map, locations);

  return (
    <div>
      <h1>位置情報一覧</h1>
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
