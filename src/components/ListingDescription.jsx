import { useContext, useEffect, useState } from 'react';
import { SingleContext } from '../app/SingleListingBooking.jsx';

export const ListingDescription = ({ property }) => {

  const { listing } = useContext(SingleContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [info, setInfo] = useState({
    max_guests: 'still loading...',
    cancellation_policy: 'still loading...',
    description: 'still loading...',
    cleaning_fee: 'still loading...',
    property_type: 'still loading...'
  }) 

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };


  useEffect(() => {

    if (listing) {

      setInfo({
        max_guests: listing.max_guests,
        cancellation_policy: listing.cancellation_policy,
        description: listing.description,
        cleaning_fee: listing.cleaning_fee,
        property_type: listing.property_type
      })

    }

  }, [listing])


  return (
    <div className="w-1/2 text-sm text-gray-700 space-y-4">
      <ul className="space-y-2 text-left text-md">
        <li>Max Guests: <span className="text-logoColor font-semibold">{info.max_guests}</span></li>
        <li>Property Type: <span className="text-logoColor font-semibold">{info.property_type}</span></li>
        <li>Cancellation Policy: <span className="text-logoColor font-semibold">{info.cancellation_policy}</span></li>
      </ul>
      
      <p className="text-left text-lg">
        {isExpanded
          ? info.description
          : `${info.description.slice(0, 60)}...`}
        
        <span onClick={toggleDescription} className="text-teal-500 cursor-pointer">
          {isExpanded ? " see less" : " see more"}
        </span>
      </p>
    </div>
  );
};




// export const ListingDescription = ({property}) => {
// const [isExpanded, setIsExpanded] = useState(false);
// const toggleDescription = () => {
//       setIsExpanded(!isExpanded);

//       // originally had this below but research shows that the above useSte is correct
//     // const [isSeeMore, setIsSeeMore] = useState(false)
//     // //Have to create a toggle function in order for the expand description to work
//     // const toggleSeeMore = () => {
//     //     setIsSeeMore(!isSeeMore)

//     }
//   return (
//     <div>
//         <ul>
//             <li>
//                 Max Guests: {property.maxGuests}
//             </li>
//             <li>
//                 Property Type: {property.propertyType}
//             </li>
//             <li>
//                 Cancellation Policy: {property.cancellationProperty}
//             </li>
//         </ul>
//         <div>
//             {/* This allows the decription to show only 100 characters and the '...' just shows there is more content to see*/}
//         <p>{isSeeMore
//             ? property.description
//             : `${property.description.slice(0, 60)}...`}
//           {/* The toggle function will allow the functionality 'see more' and 'see less'. Basically true or false allowing the expasion after click */}
//           {/* The span just keeps the text from creating a line break and calls toggleSeeMore, switching between expanded and collapsed states as you see above. */}
//           <span onClick={toggleDescription} className="text-teal-500 cursor-pointer">
//             {isSeeMore ? " see less" : " see more"}
//           </span></p>
//         </div>
//     </div>
//   )
// }
