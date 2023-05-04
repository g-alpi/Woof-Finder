import React from "react";
import { NavLink } from "react-router-dom";
import AboutUsPicture from "../../assets/images/AboutUsPicture.jpg";

export default function Sponsors() {
    return (
        <div className="Sponsors">
            <h1 className="sponsorTitle">Patrocinadores</h1>
            <div className="sponsorImg">
                <img src={AboutUsPicture} alt="picture" />
                <img src={AboutUsPicture} alt="picture" />
                <img src={AboutUsPicture} alt="picture" />
                <img src={AboutUsPicture} alt="picture" />
                <img src={AboutUsPicture} alt="picture" />
                <img src={AboutUsPicture} alt="picture" />
            </div>
        </div>
    );
}