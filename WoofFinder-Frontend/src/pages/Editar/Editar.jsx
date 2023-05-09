import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/Registro.css";
//import "https://kit.fontawesome.com/a81368914c.js"

export default function Editar () {
  
  var [username, setTexto] = useState("");
  var [email, setTexto2] = useState("");
  var [user_password, setTexto3] = useState("");
  var [phone, setTexto5] = useState("");
  var [address, setTexto6] = useState("");
  
  var id = localStorage.getItem("storageName");
  
  const loaddata = async()=>{
    let mostrar = { page_request: "mostrar", id_db:id};
    console.log("fetch");
    await fetch('http://127.0.0.1:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mostrar)
      }).then(response => {
          return response.json();
      }).then(data => {
          
          if (data.response=="muestra exitosa")
          {
            console.log(data.response);
           setTexto(data.username);
           setTexto2(data.email);
           setTexto3(data.user_password);
           setTexto5(data.phone);
           setTexto6(data.address);
           
          }else{
            console.log("muestra fallida");
          }

        }).catch(error => {
          console.error('Error:', error);
        });

  }


  useEffect(()=>{
    loaddata();
  },[]);



  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
  
    event.preventDefault(); // Evita que se recargue la página
    
    console.log("funcionn");

      let data0 = { page_request: "editar", username_db: username, email_db:email, user_password_db:user_password, phone_db:phone, address_db:address,id_db:id};

      fetch('http://127.0.0.1:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data0)
      }).then(response => {
          return response.json();
      }).then(data => {
          
          if (data.response=="cambio exitoso")
          {
            navigate("/Login");
            console.log(data.response);
            console.log("editar");
          }else{
            console.log("cambio fallido");
          }

        }).catch(error => {
          console.error('Error:', error);
        });
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
      <div class="titleregistro">Editar Perfil</div>
        <div className="user-details-registro">
          <div className="input-box-registro">
            <span className="details-registro">Username</span>
            <input className="inputregistro" id="username" type="text" placeholder="Edit your name" defaultValue={username} onChange={handleInputChange}/>
          </div>
          <div className="input-box-registro">
            <span className="details-registro">Phone Number</span>
            <input className="inputregistro" id="phone" type="text" placeholder="Edit your phone" defaultValue={phone} onChange={handleInputChange5}/>
          </div>
          <div className="input-box-registro">
            <span className="details-registro">Email</span>
            <input className="inputregistro" id="email" type="text" placeholder="Edit your email" defaultValue={email} onChange={handleInputChange2}/>
          </div>
          <div className="input-box-registro">
            <span className="details-registro">Address</span>
            <input className="inputregistro" id="address" type="text" placeholder="Edit your address" defaultValue={address} onChange={handleInputChange6}/>
            
          </div>
          <div className="input-box-registro">
            <span className="details-registro">Password</span>
            <input className="inputregistro" id="user_password" type="text" placeholder="Edit your password" defaultValue={user_password} onChange={handleInputChange3}/>

          </div>
        </div>

      
        <h5 id="registro_fallido"></h5>

        <div className="button-registro">
          <input id="boton" type="submit" className="btn" value="Guardar" name="send_message_button2" onClick={handleSubmit}/>
        </div>
      </form>
    
    </div>
    </div>
  )
}

