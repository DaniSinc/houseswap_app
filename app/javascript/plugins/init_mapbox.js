// import 'mapbox-gl/dist/mapbox-gl.css',
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import mapboxgl, { Popup } from 'mapbox-gl';

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
        // const addMarkersToMap = (map, markers) => {
            markers.forEach((marker) => {
                const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);
    
                // new mapboxgl.Marker()
                //     .setLngLat([marker.lng, marker.lat])
                //     .setPopup(popup)
                //     // .setHTML(marker.infoWindow.content))
                //     .addTo(map);
                    
                const element = document.createElement('div');
                element.className = 'marker';
                element.style.backgroundImage = `url('${marker.image_url}')`;
                element.style.backgroundSize = 'contain';
                element.style.width = '45px';
                element.style.height = '45px';

                new mapboxgl.Marker(element)
                    .setLngLat([marker.lng, marker.lat])
                    .setPopup(popup)
                    .addTo(map);

            });
        // }

        fitMapToMarkers(map, markers);
        addMarkersToMap(map, markers);
    }
};

export { initMapbox };