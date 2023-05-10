import React, { useState, useEffect,useRef } from "react";
import { Route, Routes } from "react-router";
import "./assets/styles/App.css";
import Adopt from "./pages/Adopt/Adopt";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import Editar from "./pages/Editar/Editar";
import Home from "./pages/Home/Home";
import Modal from "./pages/Login/Modal";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="adopta" element={<Adopt />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="editar" element={<Editar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

