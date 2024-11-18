import { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import "./App.css";
import "./index.css";
import { AppRoutes } from "./Routes";
import { SignUp } from './app/SignUp';
import { SignIn } from './app/Signin';

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
    <button onClick={() => setShowRegister(true)}>Register</button>
    <button onClick={() => setShowLogin(true)}>Log In</button>
      <AppRoutes />
      <Rodal visible={showRegister} onClose={() => setShowRegister(false)} closeOnEsc="true">
        <SignUp />
      </Rodal>
      <Rodal visible={showLogin} onClose={() => setShowLogin(false)} closeOnEsc="true">
        <SignIn />
      </Rodal>
    </>
  );
}

export default App;
