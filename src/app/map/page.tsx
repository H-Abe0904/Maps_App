"use client";

import { useMap } from "../hooks/useMap";

export default function LocationPage() {
  useMap(); // カスタムフックを適用

  return (
    <div>
      <h1>東京駅の位置</h1>
      <div id="map" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}
