import { useContext, useEffect, useState, useRef } from 'react';

import { AppContext } from '../App.jsx';

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

        // new mapboxgl.Marker({ color: '#65B6A3', rotation: 0 })
        // .setLngLat([lng[0], lat[0]])
        // .addTo(map);

        return () => map.remove();

    }, [landingMapRef, MAPBOX_KEY])

    return (

        <div className="w-full h-[90%]">
            { loading && (<p>No map yet</p>)}

            <div ref={landingMapRef} 
            className="rounded-lg w-full h-full"
            ></div>
        </div>

    )
}
