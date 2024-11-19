import * as user from './sub_services/userServices.js';
import * as properties from './sub_services/propertyServices.js';
import * as bookings from './sub_services/bookingServices.js';
import * as amenities from './sub_services/amenityServices.js';

const {
  signUp,
  signIn,
  getUser,
  signOut,
  verifyToken,
  updateUser
} = user;

const {
  getProperties
} = properties

const {
  getBookings
} = bookings

const {
  getAmenities
} = amenities

const services = {
    signUp,
    signIn,
    getUser,
    signOut,
    verifyToken,
    updateUser,

    getProperties,

    getBookings,
    
    getAmenities
}

export {
    services as default,
    signUp,
    signIn,
    getUser,
    signOut,
    verifyToken,
    updateUser,
    getProperties,
    getBookings,
    getAmenities
}