import { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "./App.css";
import "./index.css";
import { AppRoutes } from "./Routes";
import { SignUp } from "./app/SignUp";
import { SignIn } from "./app/Signin";
import Footer from "./components/Footer";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  console.log(activeModal);

  // Handle signup submission
  const handleSignUp = (formData) => {
    console.log("SignUp Data:", formData);
    setActiveModal(null); // Close modal after signup
  };

  // Handle login submission
  const handleSignIn = (formData) => {
    console.log("SignIn Data:", formData);
    setActiveModal(null); // Close modal after login
  };

  return (
    <>
      
      <AppRoutes />
      {/* Register Modal */}
      <Rodal
        visible={activeModal === "register"}
        onClose={() => setActiveModal(null)}
        closeOnEsc={true}
        closeMaskOnClick={true}
        customStyles={{
          width: "400px",
          height: "400px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <SignUp onSubmit={handleSignUp} />
      </Rodal>

      {/* Login Modal */}
      <Rodal
        visible={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        closeOnEsc={true}
        closeMaskOnClick={true}
        customStyles={{
          width: "400px",
          height: "350px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <SignIn onSubmit={handleSignIn} />
      </Rodal>
      <Footer />
    </>
  );
}

export default App;
