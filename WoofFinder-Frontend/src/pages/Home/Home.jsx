import React, { useState, useEffect } from "react";
import HomePageHeader from '../../components/homePageHeader.jsx'

export default function Home() {
  const [email, setTexto] = useState("");
 


    useEffect(() => {
      console.log('La página se ha cargado');
    var saludo=localStorage.getItem("storageName");
    setTexto(saludo);
    
    }, []);

  
  
  
  return (
    <div>
      <HomePageHeader/>
      <h1>{email}</h1>
    </div>
  )
}