import { useContext, useEffect, useState, useRef } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_KEY = import.meta.env.VITE_MAPBOX_KEY;
const mapboxStyle = 'mapbox://styles/polinastepanova/clgsbvw0q001l01qm6uwhceyp/draft'

export function ListingMap() {

    mapboxgl.accessToken = MAPBOX_KEY;

    const mapContainerRef = useRef(null)

    const { listing } = useContext(SingleContext);

    // NYC coordinates as default
    const [lat, setLat] = useState(40.7128)
    const [lng, setLng] = useState(-74.0060)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        console.log(mapContainerRef.current)

        if (!mapContainerRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)

        if (listing && listing.address) {

            setLat(listing.address.latitude)
            setLng(listing.address.longitude)

        }

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapboxStyle,
            center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 14
        });

        const el = document.createElement('div');
        el.style.backgroundImage = `url('../../public/marker.png')`; // Set the PNG image
        el.style.backgroundSize = 'contain'; // Ensure the image fits
        el.style.width = '40px'; // Set marker width
        el.style.height = '40px'; // Set marker height

        new mapboxgl.Marker(el, { offset: [0, -20] })
        .setLngLat([lng, lat])
        .addTo(map);

        return () => map.remove();

    }, [listing, mapContainerRef, MAPBOX_KEY])

    
    return (
        <div className="w-full h-1/3 p-4 z-0">
            { loading && (<p>No map yet</p>)}
            <div ref={mapContainerRef} 
            className="w-full h-full rounded-lg z-0"
            ></div>
        </div>
        
    )
}

// creating a geoJSON for the POI
// const geojson = {
//     type: 'FeatureCollection',
//     features: [
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [lng, lat]
//             },
//             properties: {
//                 title: 'Project',
//                 description: 'Project Location'
//             }
//         }
//     ]
// };

// Create a marker and add it to the map.
// for (const feature of geojson.features) {
//     // create a HTML element for each feature
//     const el = document.createElement('div');
//     el.className = 'marker';

//     // make a marker for each feature and add to the map
//     new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
// }