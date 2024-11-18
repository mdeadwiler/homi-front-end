import React from 'react'
import { Link } from 'react-router-dom'

function ListingCard({listing}) {
  return (
    <Link to={`/listing/${listing._id}`}>
        <div className='card'>
            <img src={listing.link} alt={listing.title} />
            <div>
                <p>{listing.title}</p>
                <p>from ${listing.price_per_night} a day.</p>
            </div>
        </div>
    </Link>
  )
}

export default ListingCard