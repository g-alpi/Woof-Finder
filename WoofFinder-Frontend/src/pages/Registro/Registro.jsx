import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/Registro.css";
//import "https://kit.fontawesome.com/a81368914c.js"
export default function Registro() {
  const [username, setTexto] = useState("");
  const [email, setTexto2] = useState("");
  const [user_password, setTexto3] = useState("");
  const [user_password2, setTexto4] = useState("");
  const [phone, setTexto5] = useState("");
  const [address, setTexto6] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault(); // Evita que se recargue la página

    if (username != "" && email != "" && user_password != "" && user_password2 != "" && phone != "" && address != "") {
      let data0 = { page_request: "register", username_db: username, email_db: email, user_password_db: user_password, phone_db: phone, address_db: address };

      fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data0)
      }).then(response => {
        return response.json();
      }).then(data => {

        if (data.response == "registro exitoso") {
          navigate("/Login");
          console.log(data.response)
        } else {
          console.log(data.response);
          var email_registrado = document.getElementById("registro_fallido");
          email_registrado.innerHTML = "Este email ya esta registrado";
        }

      }).catch(error => {
        console.error('Error:', error);
      });
    }

  };

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setTexto2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setTexto3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setTexto4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setTexto5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setTexto6(event.target.value);
  };

  return (
    <div className="containerregistro">

      <div className="contentregistro">

        <form className="formregistro" onSubmit={handleSubmit}>
          <div className="titleregistro">Registro</div>

          <div className="user-details-registro">

            <div className="input-box-registro">
              <span className="details-registro">Nombre de usuario</span>
              <input className="inputregistro" id="username" type="text" placeholder="Enter your name" value={username} onChange={handleInputChange} />
            </div>

            <div className="input-box-registro">
              <span className="details-registro">Teléfono</span>
              <input className="inputregistro" id="phone" type="text" placeholder="Enter your phone" value={phone} onChange={handleInputChange5} />
            </div>

            <div className="input-box-registro">
              <span className="details-registro">Email</span>
              <input className="inputregistro" id="email" type="text" placeholder="Enter your email" value={email} onChange={handleInputChange2} />
            </div>

            <div className="input-box-registro">
              <span className="details-registro">Dirección</span>
              <input className="inputregistro" id="address" type="text" placeholder="Enter your address" value={address} onChange={handleInputChange6} />

            </div>
            <div className="input-box-registro">
              <span className="details-registro">Contraseña</span>
              <input className="inputregistro" id="user_password" type="password" placeholder="Enter your password" value={user_password} onChange={handleInputChange3} />

            </div>

            <div className="input-box-registro">
              <span className="details-registro">Confirmar contraseña</span>
              <input className="inputregistro" id="user_password2" type="password" placeholder="Enter your password" value={user_password2} onChange={handleInputChange4} />

            </div>

          </div>

          <h5 id="registro_fallido"></h5>

          <div className="button-registro">

            <input id="boton" type="submit" className="btn" value="Registrase" name="send_message_button2" onClick={handleSubmit} />
            <a id="login_account" href="/login">¿Ya tienes una cuenta? Inicia Sesión</a>

          </div>
        </form>

      </div>
    </div>
  )
}