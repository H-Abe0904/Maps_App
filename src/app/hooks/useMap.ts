import { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";

const useMap = (containerId: string, center: [number, number], zoom: number) => {
  const [map, setMap] = useState<maplibregl.Map | null>(null);

  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: "map",
      style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
      center: [139.767125, 35.681236],
      zoom: 12,
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  return map;
};

export default useMap;
