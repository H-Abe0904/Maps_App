import { useEffect } from "react";
import maplibregl from "maplibre-gl";

interface Location {
  id: string;
  latitude: number;
  longitude: number;
}

/**
 *  マーカーを地図に表示する
 * @param map  地図オブジェクト
 * @param locations マーカーの位置情報
 */
const useMapMarkers = (map: maplibregl.Map | null, locations: Location[]) => {
  useEffect(() => {
    if (!map || locations.length === 0) return;

    // 地図の読み込みが完了してからマーカーを追加
    map.on("load", () => {
      console.log("📌 地図の読み込み完了");

      // 既存のマーカーを削除
      const markers: maplibregl.Marker[] = locations.map((location) => {
        console.log(`📍 マーカー追加: ${location.latitude}, ${location.longitude}`);
        return new maplibregl.Marker()
          .setLngLat([location.longitude, location.latitude]) // 経度, 緯度の順
          .addTo(map);
      });

      return () => {
        markers.forEach((marker) => marker.remove());
      };
    });
  }, [map, JSON.stringify(locations)]); // `locations` が変わるたびに更新

};

export default useMapMarkers;
