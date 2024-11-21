/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getProperties = async (query=null) => {
    try {

        let response = undefined;

        // passing queries in url and into the function
        if (query) {

            // console.log('services: query for getProperties', query)
            response = await api.get(`properties/?${query}`);
        
        // general retrieval of all properties
        } else {

            // console.log('services: no query for getProperties')
            response = await api.get('properties/');

        }


        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }
}


const postProperty = async (formData) => {

    try {

        // console.log('services: creating new property')
        const response = await api.post('properties/', formData)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getMyProperties = async () => {

    try {

        // console.log('services: getting my properties')
        const response = await api.get('properties/mine/')
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getMyArchived = async () => {

    try {

        // console.log('services: getting my archived properties')
        const response = await api.get('properties/mine/archived/')
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getUserProperties = async (user_id) => {

    try {

        // console.log("services: getting requested user's properties ", user_id)
        const response = await api.get(`properties/user/${user_id}/`)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


const getSingleProperty = async (id) => {

    try {

        // console.log("services: getting one property with id ", id)
        const response = await api.get(`properties/${id}/`)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}

const putProperty = async (id, formData) => {

    try {

        // console.log("services: updating property with id ", id)
        const response = await api.patch(`properties/${id}/`, formData)
        return response.data

    } catch (err) {

        console.log(err.response.data.error);
        throw err

    }

}


/* --------------------------------Exports--------------------------------*/

export { 
    getProperties,
    postProperty,
    getMyProperties,
    getMyArchived,
    getUserProperties,
    getSingleProperty,
    putProperty
};