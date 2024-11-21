import { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../App.jsx';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_KEY = import.meta.env.VITE_MAPBOX_KEY;
const mapboxStyle = 'mapbox://styles/polinastepanova/clgsbvw0q001l01qm6uwhceyp/draft'

export const BookingMap = ({ prev }) => {

  mapboxgl.accessToken = MAPBOX_KEY;
  const bookingMapRef = useRef(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {


    if (!bookingMapRef.current) {
        console.log('map container is not available at the moment')
        return;
    }

    
    if (prev) {
      
      // setLat(listing.address.latitude)
      // setLng(listing.address.longitude)
      
      const map = new mapboxgl.Map({
          container: bookingMapRef.current,
          style: mapboxStyle,
          center: [prev.longitude, prev.latitude], // starting position [lng, lat]. Note that lat must be set between -90 and 90
          zoom: 14
      });

      setLoading(false)

      const el = document.createElement('div');
      el.style.backgroundImage = `url('../../public/marker.png')`; // Set the PNG image
      el.style.backgroundSize = 'contain'; // Ensure the image fits
      el.style.width = '40px'; // Set marker width
      el.style.height = '40px'; // Set marker height
  
      new mapboxgl.Marker(el, { offset: [0, -20] })
      .setLngLat([prev.longitude, prev.latitude])
      .addTo(map);

      return () => map.remove();

    }
    
}, [bookingMapRef, MAPBOX_KEY, prev])


  return (

    <div className="w-full h-1/3 p-4 z-0">

        { loading && (<p>No booking details yet</p>)}
        <div ref={bookingMapRef} 
        className="w-full h-full rounded-lg z-0"
        ></div>

        { loading ? (null) : (
          <div className="text-left pt-1">
            <p className="text-alternativeColor">{prev.title}</p>
            <p className="italic text-sm">from {prev.check_in} to {prev.check_out}</p>
          </div>
        ) }
    </div>

  )

};
