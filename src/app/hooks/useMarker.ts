import { useEffect } from "react";
import maplibregl from "maplibre-gl";

interface Location {
  id: string;
  latitude: number;
  longitude: number;
}

/**
 *  マーカーを地図に表示する
 * @param map  地図
 * @param locations マーカーの位置情報 
 */
const useMapMarkers = (map: maplibregl.Map | null, locations: Location[]) => {
  useEffect(() => {
    if (!map) return;

    const markers: maplibregl.Marker[] = locations.map((location) => {
      return new maplibregl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);
    });

    return () => markers.forEach((marker) => marker.remove());
  }, [map, locations]);
};

export default useMapMarkers;
