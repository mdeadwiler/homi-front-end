/* --------------------------------Imports--------------------------------*/

import axios from 'axios';

/* --------------------------------Variables--------------------------------*/

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

/* --------------------------------Functions--------------------------------*/

const signUp = async (formData) => {
    
    try {

        const response = await axios.post(`${BACKEND_URL}users/register/`, formData);

        if (response.data.error) {
            console.log(response.data.error)
            throw new Error(response.data.error);
        }

        if (response.data.access) {
            localStorage.setItem('token', response.data.access);
            const user = JSON.parse(atob(response.data.access.split('.')[1]));
            console.log("Sign up services worked. User is", user)
            return user;
        }

    } catch (err) {
        
        console.log(err.response.data.error);
        throw err

    }

} 

// TODO:
const signIn = async (formData) => {

    try {

        const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, formData);

        if (response.data.error) {
            console.log(response.data.error)
            throw new Error(response.data.error);
        }

        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            const user = JSON.parse(atob(response.data.token.split('.')[1]));
            return user;
        }

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

// TODO:
const signOut = () => {

    localStorage.removeItem('token');

}


/* --------------------------------Exports--------------------------------*/

export { signUp, signIn, getUser, signOut };