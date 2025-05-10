import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import Order from "./pages/client/Order";
import Login from "./pages/client/Login";
import NoPage from "./pages/client/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PizzaList from "./pages/client/PizzaList";
import BurgerList from "./pages/client/BurgerList";
import DrinkList from "./pages/client/DrinkList";

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === "/client/login";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/about" element={<About />} />
        <Route path="/client/contact" element={<Contact />} />
        <Route path="/client/order" element={<Order />} />
        <Route path="/client/login" element={<Login />} />
        <Route path="/client/pizzalist" element={<PizzaList />} />
        <Route path="/client/burgerlist" element={<BurgerList />} />
        <Route path="/client/drinklist" element={<DrinkList />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
