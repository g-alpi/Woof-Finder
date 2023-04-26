import React from 'react'
import { NavLink } from 'react-router-dom';
import AboutUsPicture from '../assets/images/AboutUsPicture.jpg';

export default function AboutUs() {

    return (
        <div className='aboutUs'>

            <img src={AboutUsPicture} />

            <div className="aboutUsContent">

                <h1 className='Title'>{"Sobre nosotros."}</h1>

                <h2 className='SubTitle'>{"En busca de ayudar a nuestros fieles amigos."}</h2>

                <p className='description'>
                    Somos un grupo dedicado a facilitar el proceso de adopción de animales en todo el mundo.
                    <br />
                    Creemos que cada animal merece un hogar amoroso y dedicado, y estamos comprometidos
                    <br />
                    a ayudar a los futuros dueños de mascotas a encontrar su compañero perfecto.
                    <br />
                    Nuestro objetivo es reunir a las organizaciones de adopción de animales de todo el
                    <br />
                    mundo en una plataforma fácil de usar.
                </p>

                <NavLink to="/Adopta">
                    <button className="btnPrimary">Leer más</button>
                </NavLink>

            </div>

        </div>
    )
}