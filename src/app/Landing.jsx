// FIXME: TEMPORARILY TESTING SERVICES HERE

import { useState } from "react";
import {
  signOut,
  signUp,
  signIn,
  getUser,
  verifyToken,
  updateUser,
  getAmenities,
  getProperties,
} from "../services/index.js";

export const Landing = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [logInFormData, setLogInFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const newUserResponse = await signUp(formData);
      console.log(newUserResponse);
      setUser(newUserResponse);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeSignIn = (e) => {
    setLogInFormData({ ...logInFormData, [e.target.name]: e.target.value });
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await signIn(logInFormData);
      // const updatedUser = await updateUser(logInFormData)
      // console.log(updatedUser)
      // setUser(loggedInUser);
    } catch (err) {
      console.log(err);
    }
  };
  const { username, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && email && password && password === passwordConf);
  };

  const isFormInvalidLogIn = () => {
    return !(logInFormData.username && logInFormData.password);
  };

  const handleSignOut = async () => {
    // return signOut()
    // getUser()

    // const amenities = await getAmenities()
    // console.log('amenities are ', amenities)
    // console.log('first amenitys name is', amenities[0].name)

    const properties = await getProperties();
    console.log("properties are", properties);
    console.log("first property is", properties[0]);
  };

  return (
    <main>
      Landing?
      {/* <form onSubmit={handleSubmit} className="sign-form">

          <div className="sign-form-div">
            <label className="sign-form-label" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="sign-form-div">
            <label className="sign-form-label" htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="sign-form-div">
            <label className="sign-form-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="sign-form-div">
            <label className="sign-form-label" htmlFor="passwordConf">Confirm Password:</label>
            <input
              type="password"
              id="passwordConf"
              value={formData.passwordConf}
              name="passwordConf"
              onChange={handleChange}
              required
            />
          </div>

          <div className="sign-form-div-buttons">
            <button type="submit" disabled={isFormInvalid()}>Sign Up</button>
          </div>

      </form> */}
      <form onSubmit={handleSubmitSignIn} className="sign-form">
        <div className="sign-form-div">
          <label className="sign-form-label" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={logInFormData.username}
            name="username"
            onChange={handleChangeSignIn}
            required
          />
        </div>

        <div className="sign-form-div">
          <label className="sign-form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={logInFormData.password}
            name="password"
            onChange={handleChangeSignIn}
            required
          />
        </div>

        <div className="sign-form-div-buttons">
          <button type="submit" disabled={isFormInvalidLogIn()}>
            Sign In
          </button>
        </div>
      </form>
      <button type="submit" onClick={handleSignOut}>
        Test button
      </button>
    </main>
  );
};
