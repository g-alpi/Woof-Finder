import { useEffect, useState } from "react";
import Fotter from "../../components/Fotter";
import AboutUs from "./AboutUs";
import HomePageHeader from "./HomePageHeader";

export default function Home() {
  const [email, setTexto] = useState("");

  useEffect(() => {
    console.log("La página se ha cargado");
    var id = localStorage.getItem("storageName");
    setTexto(id);
  }, []);

  useEffect(() => {
    console.log('La página se ha cargado');
  var saludo=localStorage.getItem("storageName");
  setTexto(saludo);
  
  }, []);

  
  
  
  return (
    <div>
      <HomePageHeader />
      <AboutUs />
      <Fotter />
      <h1>{email}</h1>
    </div>
  );
}
