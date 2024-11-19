// TODO: This file is in the progress. Please do not touch.

import axios from "axios";

const getToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return `Bearer ${token}`;
//   return new Promise((resolve) => {
//     const token = localStorage.getItem("token");
//     resolve(token ? `Bearer ${token}` : null);
//   });
};

const api = axios.create({
  baseURL: "https://homi-456b248c7f0d.herokuapp.com/"
});

api.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },

    function (error) {
        console.log("Request error: ", error);
        return Promise.reject(error);
    }
);

export default api;
