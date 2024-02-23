import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Topbar } from "./components/Navbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Screens/Home";
import { Footer } from "./components/Footer/Footer";
import { WindEnergy } from "./Screens/WindEnergy";
import { MainHome } from "./Screens/MainHome";


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
          </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
