import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbarr from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeAdmin from "./pages/admin/HomeAdmin";
import AdminRoute from "./pages/protect/AdminRoute";
// functions
import { currentUser } from "./functions/auth";
// redux
import { useDispatch } from "react-redux";
import { signin } from "./store/usersSlice";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;

  /* เมื่อ refresh page ให้ดึงข้อมูล user ปัจจุบันจาก server มาใส่ใน Redux */
  /* เพราะข้อมูล Redux จะหายเมื่อ refresh */
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        //code
        console.log(res.data);
        dispatch(
          signin({
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          }) //เก็บ Data ไว้ใน redux
        );
      })
      .catch((err) => {
        //err
        console.log(err);
      });
  }

  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin/HomeAdmin"
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
