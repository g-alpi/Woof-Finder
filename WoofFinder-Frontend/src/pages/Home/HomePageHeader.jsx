import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WoofFinderLogo from "../../assets/images/WoofFinderLogo.png";
import "../../assets/styles/App.css";

export default function HomePageHeader({ scrollToAboutUs, scrollToSponsors }) {
  const [username, setTexto] = useState(null);

  useEffect(() => {
    var username = localStorage.getItem("username");
    setTexto(username);
  }, []);

  return (
    <div className="homeHeader">
      <div className="navBar">
        <img src={WoofFinderLogo} alt="picture" className="Logo" />

        {/*The only 2 real paths are "/" and "/Adopta", 
  the otherones are just have a good view in the explorer and should be replace in future */}
        <div className="topnav">
          <NavLink to="/">Inicio</NavLink>
          <a onClick={scrollToAboutUs}>Sobre nosotros</a>
          <NavLink to="/Adopta">Adopta</NavLink>
          <a onClick={scrollToSponsors}>Patrocinadores</a>
          <NavLink to="/Contactanos">Contáctanos</NavLink>
          {username !== null ? (
            <NavLink to="/Perfil">Perfil</NavLink>
          ) : (
            <NavLink to="/Login">Iniciar sesión</NavLink>
          )}
        </div>
      </div>

      <div className="content">
        <h1 className="heading">{"Woof Finder"}</h1>
        <p className="description">
          {
            "Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."
          }
        </p>
      </div>
    </div>
  );
}
