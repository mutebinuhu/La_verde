"use client"
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


mapboxgl.accessToken = 'pk.eyJ1IjoibXV0ZWJpbnVodSIsImEiOiJjbHptaW16NncwNTd5MmtxeWJkZDlnb2MzIn0.5qbe4v4F-7q1kDvT7RFECQ';

const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(30.5); // Initial longitude
  const [lat, setLat] = useState(50.5); // Initial latitude
  const [zoom, setZoom] = useState(9); // Initial zoom

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [lng, lat],
      zoom: zoom,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add the Geocoder (search box) to the map
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false, // Disable adding a marker on search
      placeholder: 'Search for places in Uganda...',
    });

    // Add geocoder to the map
    map.addControl(geocoder, 'top-left');

    // When a result is selected from the Geocoder
    geocoder.on('result', (e) => {
      const { geometry } = e.result;
      setLng(geometry.coordinates[0]);
      setLat(geometry.coordinates[1]);
      map.flyTo({ center: geometry.coordinates });
    });

    // Clean up on unmount
    return () => map.remove();
  }, [lat, lng, zoom]);

  return <div ref={mapContainerRef} className="w-full h-full rounded-lg" />;
};

export default Map;
