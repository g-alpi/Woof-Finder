import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Login.css";

//import "https://kit.fontawesome.com/a81368914c.js"
export default function Login(props) {

  const [email, setTexto] = useState("");
  const [password, setTexto2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {


    event.preventDefault(); // Evita que se recargue la página

    if (email != "" && password != "") {

      let data0 = { page_request: "login", email_db: email, user_password_db: password };
      fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data0)
      }).then(response => {
        return response.json();
      }).then(data => {

        if (data.response == "Esta cuenta no existe") {
          var match_password = document.getElementById("login_fallido");
          match_password.innerHTML = data.response;
        } else {
          if (data.response == "correct password") {
            localStorage.setItem("username", )
            localStorage.setItem("storageName", data.id)
            console.log(data.response);
            navigate("/");

          } else {
            var match_password = document.getElementById("login_fallido");
            match_password.innerHTML = data.response;
            console.log(data.response)
          }

        }
      }).catch(error => {
        console.error('Error: cuenta inexistente', error);
      });
    }
  };

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setTexto2(event.target.value);
  };

  return (
    <>
      <div className="containerlogin">
        <div className="portadalogin">
          <img src="https://user-images.githubusercontent.com/126191500/233391957-a087c376-c4d1-4066-a941-8a03ae14c137.png" />
        </div>
        <div className="subcontainerlogin">

          <form className="formlogin">
            <img className="logologin" src="https://user-images.githubusercontent.com/126191500/233391957-a087c376-c4d1-4066-a941-8a03ae14c137.png" />
            <h2>Login</h2><br />
            <h5 id="login_fallido"></h5>
            <div className="input-div">
              <div className="i">
              </div>
              <div>
                <h5 id="h5_username"></h5>
                <input id="email" className="inputlogin" type="text" placeholder="e-mail" value={email} onChange={handleInputChange} />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
              </div>
              <div>
                <h5></h5>
                <input id="password" className="inputlogin" type="password" placeholder="password" value={password} onChange={handleInputChange2} />
              </div>
            </div>

            <a id="create_account" href="/registro">Create account</a>
            <input id="boton" type="submit" className="btn" value="Login" name="send_message_button2" onClick={handleSubmit} />
          </form>

        </div>
      </div>
    </>
  )
}