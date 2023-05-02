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
    avatar_path,
  } = selectedPet;
  let img = `/images/default${animal_type}.png`;
  if (avatar_path !== null) {
    img = `/images/${avatar_path}`;
  }

  return (
    <>
      <div className="popUpBackground" onClick={toggleFlag}></div>
      <div className="popUp petPopUp">
        <i class="fa-solid fa-xmark" onClick={toggleFlag}></i>
        <div className="pet">
          <img src={img} alt={pet_name} />
          <div className="petInfo">
            <h1>{pet_name}</h1>

            <ul>
              <li key="age"><span>Edad:</span> {age} años</li>
              <li key="genre"><span>Genero: </span> {genre}</li>
              <li key="size"><span>Tamaño: </span> {size}</li>
              <li key="status"><span>Estado: </span> {pet_status}</li>
              <li key="breed"><span>Raza: </span> {breed_type}</li>
            </ul>

            <h2>Descripción</h2>

            <div>
              <div className="description">
                <p>{pet_description}</p>
              </div>
              <button className="btnPrimary">Adoptar</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
