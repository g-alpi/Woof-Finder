import React from 'react'
import { NavLink } from 'react-router-dom';
import WoofFinderLogo from '../assets/styles/sources/WoofFinderLogo.png';

export default function Fotter() {

    return (
        <div className='Fotter'>
            <div className="fotterContactUs">
                <h1 className='Contactanos'>{"Contacta con nosotros"}</h1>
                <h2>{"Envianos un mensaje"}</h2>
                <NavLink to="/Contáctanos">
                    <button className="btnPrimary">Contáctanos</button>
                </NavLink>

                <div className="Autores">
                    <h3>Autores</h3>
                    <p className='Autores'>
                        Guillem
                        <br />
                        Andrès Rivera
                        <br />
                        Jhon Garcia
                    </p>
                </div>

                <div className="fotterLogo">
                    <img src={WoofFinderLogo} alt="picture" />

                    <div className='phone'>
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div className='email'>
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                    <h3 className='phoneNumber'>{"  (+34) 613414845"}</h3>
                    <h3 className='emailDirection'>{"woofinder@gmail.org"}</h3>
                </div>
            </div>

            <div className='copyRights'>
                <h2>{"Copyright 2023 All Rights Reserved Woof Finder"}</h2>
            </div>

        </div>
    )
}