// FIXME: TEMPORARILY TESTING SERVICES HERE
import { useState } from 'react';
import { signUp } from "../services/index.js";

export const Landing = () => {

  const [user, setUser] = useState(null)
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      passwordConf: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {

      console.log(formData);
      const newUserResponse = await signUp(formData);
      console.log(newUserResponse)
      setUser(newUserResponse);

    } catch (err) {

      console.log(err)
    
    }

  }

  const { username, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && email && password && password === passwordConf);
  };


  return (
    <div>Landing?

      <form onSubmit={handleSubmit} className="sign-form">

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

      </form>

    </div>

  );


}