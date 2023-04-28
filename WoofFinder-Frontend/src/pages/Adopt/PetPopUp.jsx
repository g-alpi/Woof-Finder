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
      <div className="popUp ">
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {/* <p>{pet_description}</p> */}
              </div>
              <button className="btnPrimary">Adoptar</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
