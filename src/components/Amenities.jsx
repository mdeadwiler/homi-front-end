import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';

export const Amenities = () => {

  const { listing } = useContext(SingleContext);
  const [ amenities, setAmenities ] = useState([])
  const [ loading, setLoading ] = useState(true)


  useEffect(() => {

    if (listing && listing.amenities_nested) {

      setAmenities(listing.amenities_nested)
      setLoading(false)

    }

  }, [listing])


  return (
    <div className="w-1/2 grid grid-cols-1 gap-4 overflow-y-auto md:max-h-amenities p-2 border rounded-lg">

      { loading ? null : (amenities.map((amenity, index) => {
              
          return (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg "
              >

                <p className="text-sm font-medium text-logoColor mr-10">
                  {amenity.name}
                </p>


                <img
                  src={amenity.image}
                  alt={`amenity ${index}`}
                  className="w-10 h-10 object-cover"
                />

              </div>
            );
        })) 

      }
      

    </div>
  );
};
