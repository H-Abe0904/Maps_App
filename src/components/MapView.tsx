'use client';

import { useEffect, useRef } from 'react';

interface MapViewProps {
  lat: number;
  lng: number;
}

export default function MapView({ lat, lng }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 15,
    });

    new google.maps.marker.AdvancedMarkerElement({
      position: { lat, lng },
      map,
    });
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}
