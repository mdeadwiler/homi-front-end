/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/


const getBookings = async () => {

    try {

        console.log('services: getting my bookings')
        const response = await api.get('bookings/')
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getUpcoming = async () => {

    try {

        console.log('services: getting my upcoming bookings')
        const response = await api.get('bookings/upcoming/')
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}

// TODO: create a new booking
const postBooking = async (prop_id, formData) => {

    try {

        console.log('services: creating a new booking')
        const response = await api.post(`bookings/new/${prop_id}/`, formData)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getSingleBooking = async (id) => {

    try {

        console.log('services: retrieving one booking with id ', id)
        const response = await api.get(`bookings/${id}/`)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


// TODO: update one booking
const putBooking = async (id, formData) => {

    try {

        console.log('services: updating booking with id ', id)
        const response = await api.put(`bookings/${id}/`, formData)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}

// TODO: delete one booking
const deleteBooking = async (id) => {

    try {

        console.log('services: deleting booking with id ', id)
        const response = await api.delete(`bookings/${id}/`)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getHostBookings = async () => {

    try {

        console.log('services: getting bookings of my properties')
        const response = await api.get('bookings/host/')
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getPropBookings = async (prop_id) => {

    try {

        console.log('services: getting bookings of property with id', prop_id)
        const response = await api.get(`bookings/prop/${prop_id}/`)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}

/* --------------------------------Exports--------------------------------*/

export { 
    getBookings,
    getUpcoming,
    postBooking,
    getSingleBooking,
    putBooking,
    deleteBooking,
    getHostBookings,
    getPropBookings,
};