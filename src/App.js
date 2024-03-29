import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Topbar } from "./components/Navbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Screens/Home";
import { Footer } from "./components/Footer/Footer";
import { WindEnergy } from "./Screens/WindEnergy";
import { MainHome } from "./Screens/MainHome";
import { WhyVtv } from "./Screens/WhyVtv";
import { Contact } from "./Screens/Contact";


function App() {

  return (
    <div className="App">
      <Topbar />

      <Routes>
          <>
          <Route
              path="/"
              element={<MainHome/>}/>

            <Route
              path="/solar-energy"
              element={<Home/>}/>
            
            <Route
              path="/wind-energy"
              element={<WindEnergy/>}/>
            <Route
              path="/Why-VTV"
              element={<WhyVtv/>}/>
            <Route
              path="/contact-us"
              element={<Contact/>}/>
          </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
