import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx'

export const FivePicture = () => {

  const { listing } = useContext(SingleContext);
  const [photos, setPhotos] = useState(undefined)
  const [firstPhoto, setFirstPhoto] = useState(undefined)

  // wait for photos to load
  useEffect(() => {

    if (listing) {

      let listingPhotos = Array.from(listing.photos)
      let firstListPhoto = listingPhotos.shift()

      if (listing.photos.length > 4) {
        listingPhotos.length = 4
      }

      setFirstPhoto(firstListPhoto)
      setPhotos(listingPhotos)

    }

  }, [listing])


  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 rounded-lg  p-4">

      { firstPhoto ? (
        <img
        src={firstPhoto.link}
        alt={listing.title}
        className="w-full h-full object-cover rounded-lg row-span-2"
      />
      ) : (null)}

      { photos ? 
      (photos.map((photo, i) => {

        return <img
          src={photo.link}
          alt={listing.title}
          key={i}
          className="w-full h-full object-cover rounded-lg aspect-square"
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