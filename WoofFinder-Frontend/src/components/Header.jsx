import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WoofFinderLogo from "../assets/images/WoofFinderLogo.png";
import "../assets/styles/App.css";

export default function Header() {
  const [username, setTexto] = useState(null);

  useEffect(() => {
    var username = localStorage.getItem("username");
    setTexto(username);
  }, []);

  return (
    <header className="Header">
      <NavLink to="/">
        <img src={WoofFinderLogo} alt="picture" className="Logo" />
      </NavLink>

      {/*The only 2 real paths are "/" and "/Adopta", 
            the otherones are just have a good view in the explorer and should be replace in future */}
      <div className="topnav">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/">Sobre nostros</NavLink>
        <NavLink to="/Adopta">Adopta</NavLink>
        <NavLink to="/">Patrocinadores</NavLink>
        <NavLink to="/Contactanos">Contáctanos</NavLink>
        {username !== null ? (
          <NavLink to="/Perfil">Perfil</NavLink>
        ) : (
          <NavLink to="/Login">Iniciar sesión</NavLink>
        )}
      </div>
    </header>
  );
}
