import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Employees from "./pages/Employees.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./loginPage/Login.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );

  const loginUser = () => {
    setIsLoggedIn(true);
    localStorage.setItem("auth", "true");
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
  };

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>

      {isLoggedIn && <Navbar logoutUser={logoutUser} />}

      <Routes>

        <Route path="/login" element={<Login setIsLoggedIn={loginUser} />} />

        <Route path="/" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />

        <Route path="/about" element={
          <ProtectedRoute><About /></ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute><Services /></ProtectedRoute>
        } />

        <Route path="/employees" element={
          <ProtectedRoute><Employees /></ProtectedRoute>
        } />

        <Route path="/career" element={
          <ProtectedRoute><Career /></ProtectedRoute>
        } />

        <Route path="/contact" element={
          <ProtectedRoute><Contact /></ProtectedRoute>
        } />

      </Routes>

      {isLoggedIn && <Footer />}

    </BrowserRouter>
  );
}