import React from 'react'
import { NavLink } from 'react-router-dom';
import WoofFinderLogo from '../assets/images/WoofFinderLogo.png';

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
                    <h1>Autores</h1>
                    <p className='Autores'>
                        Guillem Albo <a href="https://www.linkedin.com/in/guillem-albo-pintor/"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/g-alpi"><i class="fa-brands fa-square-github"></i></a>
                        <br />
                        Andrès Rivera <a href="https://www.linkedin.com/in/arivera-c/"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/AndyRoca"><i class="fa-brands fa-square-github"></i></a>
                        <br />
                        John Garcia <a href="https://www.linkedin.com/in/johngp97/"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/johngp97"><i class="fa-brands fa-square-github"></i></a>
                    </p>
                </div>

                <div className="fotterLogo">
                    <img src={WoofFinderLogo} alt="picture" />

                    <div className='phone'>
                        <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className='email'>
                        <i className="fa-solid fa-envelope"></i>
                    </div>

                    <h3 className='phoneNumber'>{"  (+34)613 414 243"}</h3>
                    <h3 className='emailDirection'>{"woofinder@gmail.org"}</h3>
                </div>
            </div>

            <div className='copyRights'>
                <h2>{"Copyright 2023 All Rights Reserved Woof Finder"}</h2>
            </div>

        </div>
    )
}