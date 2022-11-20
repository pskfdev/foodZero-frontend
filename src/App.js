import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
