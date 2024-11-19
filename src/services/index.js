import * as user from './sub_services/userServices.js';

const {
  signUp,
  signIn,
  getUser,
  signOut
} = user;

const services = {
    signUp,
    signIn,
    getUser,
    signOut
}

export {
    services as default,
    signUp,
    signIn,
    getUser,
    signOut
}