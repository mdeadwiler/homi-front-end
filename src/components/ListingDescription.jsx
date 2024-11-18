import React, { useState } from 'react';

export const ListingDescription = ({ property }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-sm text-gray-700 space-y-4">
      <ul className="list-decimal pl-6 space-y-2">
        <li>Max Guests: {property?.maxGuests || 'N/A'}</li>
        <li>Property Type: {property?.propertyType || 'N/A'}</li>
        <li>Cancellation Policy: {property?.cancellationPolicy || 'N/A'}</li>
      </ul>
      
      <div>
        <p>
          {isExpanded
            ? property?.description || 'No description available.'
            : `${property?.description?.slice(0, 100) || 'No description available.'}...`}
          
          <span onClick={toggleDescription} className="text-teal-500 cursor-pointer">
            {isExpanded ? " see less" : " see more"}
          </span>
        </p>
      </div>
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
