import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import WoofFinderLogo from "../../assets/images/WoofFinderLogo.png";
import "../../assets/styles/App.css";
import "../../pages/Login/Modal.css";
import Modal from "../../pages/Login/Modal.jsx";

export default function HomePageHeader() {


  


  return (
    <div className="homeHeader">
      <div className="navBar">
        <img src={WoofFinderLogo} alt="picture" className="Logo" />

        {/*The only 2 real paths are "/" and "/Adopta", 
  the otherones are just have a good view in the explorer and should be replace in future */}
        <div className="topnav">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="sobreNosotros">Sobre nostros</NavLink>
          <NavLink to="/Adopta">Adopta</NavLink>
          <NavLink to="/Patrocinadores">Patrocinadores</NavLink>
          <NavLink to="/Contactanos">Contáctanos</NavLink>
          <NavLink to="/Login">Iniciar sesión</NavLink>
          <NavLink to="/Editar">Editar</NavLink>
        </div>
      </div>

      <div className="content">
        <h1 className="heading">{"Woof Finder"}</h1>
        <p className="description">
          {
            "Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
          }
        </p>
        <NavLink to="/Adopta">
          <button className="btnPrimary">Adoptar</button>
        </NavLink>
      </div>
    </div>
  );
}

