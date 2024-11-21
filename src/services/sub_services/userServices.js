/* --------------------------------Imports--------------------------------*/

import api from "./apiConfig.js";

/* --------------------------------Functions--------------------------------*/

const signUp = async (formData) => {
  try {
    const response = await api.post("users/register/", formData);
    localStorage.setItem("token", response.data.access);
    return response.data.user;
  } catch (err) {
    console.log(err.response.data.error);
    throw err;
  }
};

const signIn = async (formData) => {
  try {
    const response = await api.post("users/login/", formData);
    localStorage.setItem("token", response.data.access);
    return response.data.user;
  } catch (err) {
    console.log(err.response.data.error);
    throw err;
  }
};

const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const user = JSON.parse(atob(token.split(".")[1]));
  console.log(user);
  return user;
};

const verifyToken = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await api.get("users/token/refresh/");
    localStorage.setItem("token", response.data.access);
    console.log("the user is ", response.data.user);
    return response.data.user;
  }

  console.log("No user");
  return false;
};

const signOut = () => {
  try {
    localStorage.removeItem("token");
    console.log("Signed out");
  } catch (error) {
    console.log(err.response.data.error);
    throw err;
  }
};

const updateUser = async (formData) => {
  try {
    const response = await api.patch("users/profile/", formData);
    console.log("changed user", response.data.user);
    return verifyToken();
  } catch (err) {
    console.log(err.response.data.error);
    throw err;
  }
};

/* --------------------------------Exports--------------------------------*/

export { signUp, signIn, getUser, signOut, verifyToken, updateUser };
