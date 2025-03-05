"use client";

import MapView from "@/components/MapView";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapView"), {
  ssr: false, // SSRを無効化
});

export default function LocationPage() {
  return (
    <div>
      <h1>東京駅のマップ</h1>
      <MapView />
    </div>
  );
}
