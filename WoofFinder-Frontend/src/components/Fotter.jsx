import React from "react";
import { NavLink } from "react-router-dom";
import WoofFinderLogo from "../assets/images/WoofFinderLogo.png";

export default function Fotter() {
  return (
    <>
      <div className="Fotter">
        <div className="fotterContactUs">
          <div>
            <h1 className="Contactanos">{"Contacta con nosotros"}</h1>
            <h2>{"Envianos un mensaje"}</h2>
            <NavLink to="/Contáctanos">
              <button className="btnPrimary">Contáctanos</button>
            </NavLink>
          </div>
          <div className="Autores">
            <h1>Autores</h1>
            <p className="Autores">
              Guillem Albo{" "}
              <a href="https://www.linkedin.com/in/guillem-albo-pintor/">
                <i className="fa-brands fa-linkedin"></i>
              </a>{" "}
              <a href="https://github.com/g-alpi">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <br />
              Andrès Rivera{" "}
              <a href="https://www.linkedin.com/in/arivera-c/">
                <i className="fa-brands fa-linkedin"></i>
              </a>{" "}
              <a href="https://github.com/AndyRoca">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <br />
              John Garcia{" "}
              <a href="https://www.linkedin.com/in/johngp97/">
                <i className="fa-brands fa-linkedin"></i>
              </a>{" "}
              <a href="https://github.com/johngp97">
                <i className="fa-brands fa-square-github"></i>
              </a>
            </p>
          </div>

          <div className="fotterLogo">
            <div>
              <span>
                <i className="fa-solid fa-phone phone"></i>
                <p>(+34)613 414 243</p>
              </span>
              <span>
                <i className="fa-solid fa-envelope"></i>
                <p>woofinder@gmail.org</p>
              </span>
            </div>
            <img src={WoofFinderLogo} alt="picture" />
          </div>
        </div>
        <div className="copyRights">
          <p>{"Copyright 2023 All Rights Reserved Woof Finder"}</p>
        </div>
      </div>
    </>
  );
}
