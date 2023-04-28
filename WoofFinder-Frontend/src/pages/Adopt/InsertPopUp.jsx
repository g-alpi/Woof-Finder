import React, { useEffect, useState } from "react";

export default function InsertPopUp({ toggleFlag }) {
  const [contador, setContador] = useState(0);
  const [breeds, setBreeds] = useState({ perro: [], gato: [] });
  const GET_ALL_BREEDS_URL = "http://localhost:8080/pet/breeds";
  useEffect(() => {
    fetch(GET_ALL_BREEDS_URL)
      .then((data) => data.json())
      .then((data) => {
        data.map((breed) => {
          if (breed.animal_type === "Perro") {
            setBreeds((prev) => {
              prev.perro = [...prev.perro, breed.breed_type];
            });
          }
        });
      });
  }, []);

  useEffect(() => {
    console.log(breeds.perro);
  }, [breeds]);

  const nextInput = (e) => {
    const input = e.target.previousElementSibling.lastChild.lastChild;
    const value = input.value;
    if (value != "") {
      setContador((contador) => contador + 1);
      // input.disabled = true;
    }
  };
  // const previousInput = () => {};

  const animalTypeInput = (
    <span>
      <label htmlFor="type">Tipo de animal: </label>
      <select name="type" id="type">
        <option value="" hidden></option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
      </select>
    </span>
  );

  const nameInput = (
    <span>
      <label htmlFor="">Nombre: </label>
      <input type="text" placeholder="Sanbenito" />
    </span>
  );
  const ageInput = (
    <span>
      <label htmlFor="">Edad: </label>
      <input type="number" />
    </span>
  );

  const genreInput = (
    <span>
      <label htmlFor="">Género: </label>
      <select name="" id="">
        <option value="" hidden></option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>
    </span>
  );

  const sizeInput = (
    <span>
      <label htmlFor="">Tamaño: </label>
      <select name="" id="">
        <option value="" hidden></option>
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>
    </span>
  );

  const illnessInput = (
    <span>
      <label htmlFor="">Enfermedades: </label>
      <textarea name="" rows="10" cols="30" />
    </span>
  );
  const descriptionInput = (
    <span>
      <label htmlFor="">Descripcion: </label>
      <textarea name="" rows="10" cols="30" />
    </span>
  );
  const breedInput = (
    <span>
      <label htmlFor="breed">Raza: </label>
      <select name="breed" id="breed">
        <option value="" hidden></option>
      </select>
    </span>
  );
  return (
    <>
      <div className="popUpBackground" onClick={toggleFlag}></div>
      <div className="popUp">
        <i class="fa-solid fa-xmark" onClick={toggleFlag}></i>
        <h1>Registro de un animal</h1>
        <div className="insertForm">
          {contador >= 0 ? animalTypeInput : ""}
          {contador >= 1 ? nameInput : ""}
          {contador >= 2 ? breedInput : ""}
          {contador >= 3 ? ageInput : ""}
          {contador >= 4 ? genreInput : ""}
          {contador >= 5 ? sizeInput : ""}
          {contador >= 6 ? illnessInput : ""}
          {contador >= 7 ? descriptionInput : ""}
        </div>
        <button className="dynamicFormButton" onClick={nextInput}>
          Siguiente
        </button>
      </div>
    </>
  );
}
