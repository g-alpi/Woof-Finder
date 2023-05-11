import React, { createElement, useEffect, useState } from "react";

export default function PetProfileCard({ content }) {
  const {
    pets_id,
    pet_name,
    age,
    genre,
    size,
    illness,
    pet_description,
    pet_status,
    breed_type,
    animal_type,
    avatar_path,
  } = content;

  let img = `/images/default${animal_type}.png`;
  if (avatar_path !== null) {
    img = `/images/${avatar_path}`;
  }

  function handleAdoptRemover() {
    var id = localStorage.getItem("user_id");
    console.log(id, pets_id);
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("pets_id", pets_id);

    fetch("http://localhost:8080/pet/borrarmascota", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [username, setTexto] = useState(null);

  useEffect(() => {
    var username = localStorage.getItem("username");
    setTexto(username);
  }, []);

  return (
    <div className="petDisplay">
      <img src={img} alt={pet_name} />
      <div className="petInfo">
        <h1>{pet_name}</h1>

        <ul>
          <li key="age">
            <span>Edad:</span> {age} años
          </li>
          <li key="genre">
            <span>Genero: </span> {genre}
          </li>
          <li key="size">
            <span>Tamaño: </span> {size}
          </li>
          <li key="status">
            <span>Estado: </span> {pet_status}
          </li>
          <li key="breed">
            <span>Raza: </span> {breed_type}
          </li>
        </ul>

        <h1>Descripción</h1>
        <p>{pet_description}</p>
        <button className="btnPrimary" onClick={handleAdoptRemover}>
          Borrar
        </button>
      </div>
    </div>
  );
}
