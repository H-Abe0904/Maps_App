"use client";

import { useState, useEffect } from "react";
import { useMap } from "../hooks/useMap";
import { fetchLocations } from "../../lib/location";

export default function LocationPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then(setLocations).catch(console.error);
  }, []);

  // カスタムフックを使用してマップを初期化
  useMap(locations);

  return (
    <div>
      <h1>位置情報一覧</h1>
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
