import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/styles/App.css"
import headerPicture1 from '../assets/styles/sources/headerPicture1.png';
import WoofFinderLogo from '../assets/styles/sources/WoofFinderLogo.png';



export default function Header() {

  return (

    <div className='Header'>

        {
            /*The only 2 real paths are "/" and "/Adopta", 
            the otherones are just have a good view in the explorer and should be replace in future */
        }
      <div className="topnav">
        <NavLink to ="/">Inicio</NavLink>
        <NavLink to ="/sobreNosotros">Sobre nostros</NavLink>
        <NavLink to ="/Adopta">Adopta</NavLink>
        <NavLink to = "/Patrocinadores">Patrocinadores</NavLink>
        <NavLink to =  "/Contactanos">Contáctanos</NavLink>
        <NavLink to = "/iniciarSesion">Iniciar sesión</NavLink>
      </div>

      <div className="Logo">
        <img src={WoofFinderLogo} alt="picture" />
      </div>

      <img className="background" src={headerPicture1} alt="picture2" />

    </div >
  )
}