// import 'mapbox-gl/dist/mapbox-gl.css',
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
    const mapElement = document.getElementById('map');
    const fitMapToMarkers = (map, markers) => {
        const bounds = new mapboxgl.LngLatBounds();
        markers.forEach(marker => bounds.extend([marker.lng, marker.lat]));
        map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
    };

    if (mapElement) {
        mapboxgl.accessToken = process.env.MAPBOX_API_KEY;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });

        const markers = JSON.parse(mapElement.dataset.markers);
        markers.forEach((marker) => {
            new mapboxgl.Marker()
                .setLngLat([marker.lng, marker.lat])
                .addTo(map);
        });

        fitMapToMarkers(map, markers);
    }
};

export { initMapbox };