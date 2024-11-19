/* --------------------------------Imports--------------------------------*/

import api from './apiConfig.js';

/* --------------------------------Functions--------------------------------*/

const signUp = async (formData) => {
    
    try {

        const response = await api.post('users/register/', formData);
        localStorage.setItem('token', response.data.access);
        return response.data.user;

    } catch (err) {
        
        console.log(err.response.data.error);
        throw err

    }

} 

const signIn = async (formData) => {

    try {

        const response = await api.post('users/login/', formData);
        localStorage.setItem('token', response.data.access);
        return response.data.user;

    } catch (err) {

        console.log(err.response.data.error);
        throw err;

    }

}

// TODO:
const getUser = () => {

    const token = localStorage.getItem('token');
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));
    return user;

}


const signOut = () => {

    try {
        
        localStorage.removeItem('token');
        console.log("Signed out")
        
    } catch (error) {

        console.log(err.response.data.error);
        throw err;

    }

}

// TODO:
const updateUser = (formData) => {

    console.log('firing update user')

}


/* --------------------------------Exports--------------------------------*/

export { signUp, signIn, getUser, signOut };