/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const getAmenities = async () => {

    try {

        const response = await api.get('amenities/');
        // console.log('services: getAmenities in the work', response.data)
        return response.data;

    } catch (err) {
        
        console.log(err.response.data.error);
        throw err

    }
}


/* --------------------------------Exports--------------------------------*/

export { getAmenities }