import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Home from "./pages/Home";
import Equipment from "./pages/Equipment";
import Customers from "./pages/Customers";
import EquipmentDetail from "./pages/EquipmentDetail";
import CusomerDetail from "./pages/CustomerDetail";
import Navbar from "./NavBar";
function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipments" element={<Equipment />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="/Customer/:id" element={<CusomerDetail />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;