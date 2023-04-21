import React from 'react'
import { useState } from 'react'
import "../assets/styles/App.css"
import headerPicture1 from '../assets/styles/sources/headerPicture1.png';
import WoofFinderLogo from '../assets/styles/sources/WoofFinderLogo.png';



export default function SlideShow() {

  return (

    <div className='header'>

      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">Sobre nostros</a>
        <a href="#contact">Sponsors</a>
        <a href="#about">Contáctanos</a>
        <a href="#about">Iniciar sesión</a>
      </div>

      <div className="Logo">
        <img src={WoofFinderLogo} alt="picture" />
      </div>

      <img className="background" src={headerPicture1} alt="picture2" />

      <div className="content">
        <h1 className='heading'>{"Woof Finder"}</h1>
        <p className='description'>{"Tu mascota esta esperando por ti...Encuentra el mejor lugar para adoptar."}</p>
        <button className="--btn--btn--primary">Adoptar</button>
      </div>

    </div >
  )
}

