import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/gallery" element={<Gallery />} />

        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
