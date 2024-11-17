//import { useState } from 'react'
import "./App.css";
import "./index.css";
import FivePicture from "./components/FivePicture";
import MiniListingForm from "./components/MiniListingForm";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <h1 className="font-sans text-7xl">Homi</h1>
      <AppRoutes />
    </>
  );
}

export default App;
