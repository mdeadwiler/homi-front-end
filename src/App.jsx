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
import { getUser } from "./services/sub_services/userServices";
// import { Listings } from "./app/Listings";
// import { Bookings } from "./app/Bookings";
// import { Amenities } from "./components/Amenities";





function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [user, setUser] = useState(null);
  // const [listings, setListings] = useState([]);
  // const [bookings, setBookings] = useState([]);
  // const [amenities, setAmenities] = useState([]);

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

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     try {
  //       const listingsData = await listings();
  //       setListings(listingsData);
  //     } catch (err) {
  //       console.error("Failed to get listings", err);
  //     }
  //   };
  //   fetchListings();
  // }, []);

  // useEffect(() => {
  //   const fetchBookings = async () => {
  //     try {
  //       const bookingsData = await bookings();
  //       setBookings(bookingsData);
  //     } catch (err) {
  //       console.error("Failed to get bookings", err);
  //     }
  //   };
  //   fetchBookings();
  // }, []);

  // useEffect(() => {
  //   const fetchAmenities = async () => {
  //     try {
  //       const amenitiesData = await amenities();
  //       setAmenities(amenitiesData);
  //     } catch (err) {
  //       console.error("Failed to get amenities", err);
  //     }
  //   };
  //   fetchAmenities();
  // }, []);

  const handleSignUp = (data) => {
    setUser(data);
    setActiveModal(null);
  };

  const handleSignIn = (data) => {
    setUser(data);
    setActiveModal(null);
  };

  const handleSignOut = (data) => {
    setUser(data)
    setActiveModal(null)
  }

  return (
    <>
      <Navbar
        setShowRegister={() => setActiveModal("register")}
        setShowLogin={() => setActiveModal("login")}
        setShowSignOut={() => setActiveModal("signOut")}
        user={user}
      />
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
    {/* signout waiting to be added */} 
       <Rodal
        visible={activeModal === "signout"}
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
      <Signout onSubmit={handleSignOut} />
      </Rodal>

      <Footer />
    </>
  );
}

export default App;
