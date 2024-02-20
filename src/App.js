import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Topbar } from "./components/Navbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Screens/Home";


function App() {

  return (
    <div className="App">
      <Topbar />

      <Routes>
          <>
            <Route
              path="/"
              element={<Home/>}/>
          </>
      </Routes>
    </div>
  );
}

export default App;
