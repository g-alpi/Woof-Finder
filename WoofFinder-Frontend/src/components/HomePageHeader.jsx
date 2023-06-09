import React from "react";
import { NavLink } from "react-router-dom";
import WoofFinderLogo from "../assets/images/WoofFinderLogo.png";
import "../assets/styles/App.css";

export default function HomePageHeader() {
  return (
    <div className="homeHeader">
      {/*The only 2 real paths are "/" and "/Adopta", 
        the otherones are just have a good view in the explorer and should be replace in future */}
      <div className="topnav">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sobreNosotros">Sobre nostros</NavLink>
        <NavLink to="/Adopta">Adopta</NavLink>
        <NavLink to="/Patrocinadores">Patrocinadores</NavLink>
        <NavLink to="/Contactanos">Contáctanos</NavLink>
        <NavLink to="/Login">Iniciar sesión</NavLink>
      </div>

      <div className="Logo">
        <img src={WoofFinderLogo} alt="picture" />
      </div>

      <div className="content">
        <h1 className="heading">{"Woof Finder"}</h1>
        <p className="description">
          {
            "Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
          }
        </p>
        <NavLink to="/Adopta">
          <button className="--btn--btn--primary">Adoptar</button>
        </NavLink>
      </div>
    </div>
  );
}
