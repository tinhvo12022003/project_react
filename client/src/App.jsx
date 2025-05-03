import React from "react";

{/*import pages*/}
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage"
import Navbar from "./components/Navbar";

{/*import browser from router*/}
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>

      {/*builder navbar link to pages*/}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="order" element={<Order />}/>
            <Route path="login" element={<Login />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}