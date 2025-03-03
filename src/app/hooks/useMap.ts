import { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

const useMap = (containerId: string | HTMLElement | null, center: [number, number], zoom: number) => {
  const [map, setMap] = useState<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerId) return; // コンテナが設定されていない場合はスキップ

    const mapInstance = new maplibregl.Map({
      container: containerId, // 変更: `map` ではなく `containerId` を使用
      style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
      center: center, // `center` を引数から受け取る
      zoom: zoom, // `zoom` を引数から受け取る
    });

    mapInstance.on("load", () => {
      console.log("🌍 地図が読み込まれました");
    });

    setMap(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, [containerId]);

  return map;
};

export default useMap;
