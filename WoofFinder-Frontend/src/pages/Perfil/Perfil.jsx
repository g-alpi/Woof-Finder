import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InsertPet from "../../components/InsertPet";
import Editar from "./Editar";
import InfoPerfil from "./InfoPerfil";
import PetProfileCard from "./PetProfileCard";

export default function Perfil() {
  const navigate = useNavigate();

  const [editFlag, setEditFlag] = useState(false);
  const [pets, setPets] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  var id = localStorage.getItem("user_id");
  const GET_MY_PETS = "http://localhost:8080/pet/mismascotas/" + id;

  useEffect(() => {
    let formData = new FormData();
    formData.append("user_id", parseInt(id));
    fetch(GET_MY_PETS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPets(data);
        setDataLoaded((data) => (data = true));
      })
      .catch((error) => console.error(error));
  }, []);

  const Perfil_to_Informacion = () => {
    navigate("/Perfil");
  };

  function Perfil_to_Editar() {
    editFlag
      ? setEditFlag((flag) => (flag = false))
      : setEditFlag((flag) => (flag = true));
  }
  const Perfil_to_Adopta = () => {
    navigate("/Adopta");
  };
  const Perfil_to_Home = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Header />
      <InsertPet />
      <div className="profileContainer">
        <div className="filterContainer profile">
          <h1>&nbsp; Perfil</h1>
          <section className="animalType">
            <span>
              <input
                className="btnPrimaryPerfil"
                type="button"
                id="botonperfil"
                value="Información"
                onClick={Perfil_to_Informacion}
              />
            </span>
          </section>

          <p></p>

          <section className="animalType">
            <span>
              <input
                className="btnPrimaryPerfil"
                type="button"
                id="botonperfil"
                value="Editar"
                onClick={Perfil_to_Editar}
              />
            </span>
          </section>

          <p></p>

          <section className="animalType">
            <span>
              <input
                className="btnPrimaryPerfil"
                type="button"
                id="botonperfil"
                value="Adoptar"
                onClick={Perfil_to_Adopta}
              />
            </span>
          </section>

          <p></p>

          <section className="animalType">
            <span>
              <input
                className="btnPrimaryPerfilLogout"
                type="button"
                id="botonperfil"
                value="Logout"
                onClick={Perfil_to_Home}
              />
            </span>
          </section>
        </div>

        <div className="bloque-info">
          {editFlag ? (
            <Editar Perfil_to_Editar={Perfil_to_Editar} />
          ) : (
            <InfoPerfil />
          )}

          <h1>Mis mascotas</h1>
          <div className="petsProfileContainer">
            {dataLoaded && pets.map((pet) => <PetProfileCard content={pet} />)}
          </div>
        </div>
      </div>
    </>
  );
}
