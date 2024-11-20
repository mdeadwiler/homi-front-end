import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx'

export const FivePicture = () => {

  const { listing } = useContext(SingleContext);
  const [photos, setPhotos] = useState(undefined)

  // wait for photos to load
  useEffect(() => {

    if (listing) {
      setPhotos(listing.photos)
    }

  }, [listing])


  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 rounded-lg  p-4">

      { photos ? 
      (photos.map(photo => {

        return <img
          src={photo.link}
          alt={listing.title}
          className="w-full h-full object-cover rounded-lg"
        />
        
      })) : 
      (<p>Photos not loaded yet...</p>)
      }

    </div>
  );

  
};


// Marquise's old code below:

{/* <div className="row-span-2">
    <img
      src="https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920"
      alt="home1"
      className="w-full h-full object-cover rounded-lg"
    />
</div>

      <div>
        <img
          src="https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920"
          alt="home1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920"
          alt="home1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920"
          alt="home1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://a0.muscache.com/im/pictures/5e67688b-757d-44d6-8b4b-1e91dc6fe49f.jpg?im_w=1920"
          alt="home1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div> */}