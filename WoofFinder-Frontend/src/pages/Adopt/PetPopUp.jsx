import React from "react";

export default function PetPopUp({ selectedPet, toggleFlag }) {
  const {
    pet_name,
    age,
    genre,
    size,
    illness,
    pet_description,
    pet_status,
    breed_type,
    animal_type,
  } = selectedPet;
  const img = `/images/default${animal_type}.png`;

  return (
    <>
      <div className="popUpBackground" onClick={toggleFlag}></div>
      <div className="popUp">
        <i class="fa-solid fa-xmark" onClick={toggleFlag}></i>
        <div className="pet">
          <img src={img} alt={pet_name} />
          <div className="petInfo">
            <h1>{pet_name}</h1>

            <ul>
              <li key="age">Edad: {age}</li>
              <li key="genre">Genero: {genre}</li>
              <li key="size">Tamaño: {size}</li>
              <li key="status">Estado: {pet_status}</li>
              <li key="breed">Raza: {breed_type}</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="description">
            <h2>Descripción</h2>
            <p>{pet_description}</p>
          </div>
          <button className="adoptbtn">Adoptar</button>
        </div>
      </div>
    </>
  );
}
