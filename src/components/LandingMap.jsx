import { useContext, useEffect, useState, useRef } from 'react';

import App, { AppContext } from '../App.jsx';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const MAPBOX_KEY = import.meta.env.VITE_MAPBOX_KEY;
const mapboxStyle = 'mapbox://styles/polinastepanova/clgsbvw0q001l01qm6uwhceyp/draft'


export const LandingMap = () => {

    // get listings from useContext object

    mapboxgl.accessToken = MAPBOX_KEY;
    const landingMapRef = useRef(null)

    const [lat, setLat] = useState([40.7128])
    const [lng, setLng] = useState([-74.0060])
    const [loading, setLoading] = useState(true)
    const [markers, setMarkers] = useState([])

    const { properties } = useContext(AppContext)

    useEffect(() => {

        if (properties) {

            if (properties.length > 0) {

                let markerCollection = []
                properties.forEach(property => {

                    if (property.address) {

                        let newMarker = {
                            latitude: property.address.latitude,
                            longitude: property.address.longitude
                        }
                        markerCollection.push(newMarker)

                    }

                })

                // console.log('markerCollection is ', markerCollection)
                setMarkers(markerCollection)

            }

        }

    }, [properties])


    useEffect(() => {

        if (!landingMapRef.current) {
            console.log('map container is not available at the moment')
            return;
        }

        setLoading(false)
        
        const map = new mapboxgl.Map({
            container: landingMapRef.current,
            style: mapboxStyle,
            center: [-98.5795, 39.8283], // starting position [lng, lat]. Note that lat must be set between -90 and 90
            zoom: 2.7
        });

        
        if (markers.length > 0) {
            
            // markers.forEach(marker => {

            //     new mapboxgl.Marker({ color: '#65B6A3', rotation: 0 })
            //     .setLngLat([marker.longitude, marker.latitude])
            //     .addTo(map);

            // })

            markers.forEach(marker => {
                // Create a custom HTML element for the marker
                const el = document.createElement('div');
                el.style.backgroundImage = `url('../../public/marker.png')`; // Set the PNG image
                el.style.backgroundSize = 'contain'; // Ensure the image fits
                el.style.width = '40px'; // Set marker width
                el.style.height = '40px'; // Set marker height
        
                // Add the custom marker to the map
                new mapboxgl.Marker(el, { offset: [0, -20] })
                    .setLngLat([marker.longitude, marker.latitude])
                    .addTo(map);
            });

        }



        return () => map.remove();

    }, [landingMapRef, MAPBOX_KEY, markers])


    return (

        <div className="w-full h-[90%]">
            { loading && (<p>No map yet</p>)}

            <div ref={landingMapRef} 
            className="rounded-lg w-full h-full"
            ></div>
        </div>

    )
}
