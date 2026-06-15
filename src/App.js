import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Topbar } from "./components/Navbar/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "./components/Footer/Footer";
import { MainHome } from "./Screens/MainHome";
import { WhyVtv } from "./Screens/WhyVtv";
import { Contact } from "./Screens/Contact";
import { Solutions } from "./Screens/Solutions";
import { CommercialInfrastructure } from "./Screens/CommercialInfrastructure";
import { Foundation } from "./Screens/Foundation";
import { InvestorRelations } from "./Screens/InvestorRelations";

function App() {
  return (
    <div className="App" style={{ background: '#0B0B0B', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Topbar />

      <div style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/commercial-infrastructure" element={<CommercialInfrastructure />} />
          <Route path="/Why-VTV" element={<WhyVtv />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/contact-us" element={<Contact />} />
          
          {/* Redirects for removed pages */}
          <Route path="/solar-energy" element={<Navigate to="/solutions" replace />} />
          <Route path="/wind-energy" element={<Navigate to="/solutions" replace />} />
          
          {/* Wildcard redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
