import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Editar from "./../Editar/Editar";

export default function EditarPerfil() {
  const navigate = useNavigate();

  const [pets, setPets] = useState();
  const [types, setTypes] = useState({});
  const [selectedPetFlag, setSelectedPetFlag] = useState(false);
  const [selectedPetInfo, setSelectedPet] = useState();
  const [insertFlag, setInsertFlag] = useState(false);

  const [visible, setVisible] = useState(true);

  const GET_ALL_PETS = "http://localhost:8080/pet/mismascotas";
  var id = localStorage.getItem("user_id");
  console.log(id);

  useEffect(() => {
    fetch(GET_ALL_PETS)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].pet_name);
        let num_mascotas = 0;
        let filtro_mascotas = [];
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].users_pets_id + " indice");
          if (data[i].users_pets_id == id) {
            num_mascotas = num_mascotas + 1;
            filtro_mascotas.push(data[i]);
          }
        }
        console.log("holaaa");
        console.log(num_mascotas);

        setPets(filtro_mascotas);
        console.log(num_mascotas);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (data) => {
    const { value, checked } = data;
    setTypes((prevTypes) => ({
      ...prevTypes,
      [value]: checked,
    }));
  };

  const toggleInsertFlag = () => {
    insertFlag === true ? setInsertFlag(false) : setInsertFlag(true);
  };
  const togglePetFlag = () => {
    selectedPetFlag === true
      ? setSelectedPetFlag(false)
      : setSelectedPetFlag(true);
  };

  const selectPet = (data) => {
    setSelectedPet(data);
    setSelectedPetFlag(true);
  };

  const Perfil_to_Informacion = () => {
    navigate("/Perfil");
  };

  const Perfil_to_Editar = () => {
    navigate("/EditarPerfil");
  };
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

      <div className="adopt">
        <div className="filterContainer">
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

        <div className="petsContainer">
          <Editar />
        </div>
      </div>
    </>
  );
}
