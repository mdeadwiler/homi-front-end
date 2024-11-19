import { useState } from 'react'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
import "./App.css";
import "./index.css";
import { AppRoutes } from "./Routes";
import { SignUp } from './app/SignUp';
import { SignIn } from './app/Signin';
import { Navbar } from './components/NavBar';
import { Footer } from "./components/Footer"
function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Navbar setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>
      <AppRoutes />
      <Rodal visible={showRegister} onClose={() => setShowRegister(false)} closeOnEsc={true}>
        <SignUp />
      </Rodal>
      <Rodal visible={showLogin} onClose={() => setShowLogin(false)} closeOnEsc={true}>
        <SignIn />
      </Rodal>
      <Footer />
    </>
  );
}

export default App;
