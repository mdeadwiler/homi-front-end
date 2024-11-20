import { useState, useEffect } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "./App.css";
import "./index.css";
import { AppRoutes } from "./Routes";
import { SignUp } from "./app/SignUp";
import { SignIn } from "./app/Signin";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { getUser} from "./services/sub_services/userServices";


function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [user, setUser] = useState(null);
  


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (err) {
        console.error("Failed to get user data", err);
      }
    };
    fetchUser();
  }, []);

  

  
  const handleSignUp = (data) => {
    setUser(data);
    setActiveModal(null);
  };

  const handleSignIn = (data) => {
    setUser(data);
    setActiveModal(null);
  };

  return (
   <>
      <Navbar
        setShowRegister={() => setActiveModal("register")}
        setShowLogin={() => setActiveModal("login")}
        user={user}
      />
      <AppRoutes />
      {/* Modals */}
      <Rodal
        visible={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        customStyles={{ width: "400px", height: "400px", borderRadius: "10px" }}
      >
        <SignUp onSubmit={handleSignUp} />
      </Rodal>
      <Rodal
        visible={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        customStyles={{ width: "400px", height: "350px", borderRadius: "10px" }}
      >
        <SignIn onSubmit={handleSignIn} />
      </Rodal>
      <Footer />
      </>
  );
}

export default App;
