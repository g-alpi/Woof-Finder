import React, { useEffect, useState } from "react";

export default function InsertPopUp({ toggleFlag }) {
  const [contador, setContador] = useState(0);
  const [breeds, setBreeds] = useState();
  const [breed, setBreed] = useState();
  const GET_ALL_BREEDS_URL = "http://localhost:8080/pet/breeds";

  useEffect(() => {
    fetch(GET_ALL_BREEDS_URL)
      .then((data) => data.json())
      .then((data) => {
        let breedDog = [];
        let breedCat = [];
        data.map((breed) => {
          breed.animal_type === "Perro"
            ? (breedDog = [...breedDog, breed.breed_type])
            : (breedCat = [...breedCat, breed.breed_type]);
        });
        setBreeds({ dog: breedDog, cat: breedCat });
      });
  }, []);

  useEffect(() => {
    console.log(contador);
  }, [contador]);

  const nextInput = (e, input) => {
    // const input = e.target.previousElementSibling.lastChild.lastChild;
    // const value = input.value;
    // if (value != "") {
    //   setContador((contador) => contador + 1);
    //   // input.disabled = true;
    // }
    switch (input) {
      case "type":
        setContador(1);
        break;
      case "name":
        setContador(2);
        break;
      default:
        break;
    }
    console.log(e.target);
    setContador((contador) => contador + 1);
  };
  // const previousInput = () => {};

  const handleType = (e) => {
    const value = e.target.value;
    setBreed(value);
  };
  const animalTypeInput = (
    <span>
      <label htmlFor="type">Tipo de animal: </label>
      <select
        name="type"
        id="type"
        onChange={handleType}
        onInput={(e) => nextInput(e, "type")}
      >
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

  let breedDogInput = (
    <span>
      <label htmlFor="breed">Raza: </label>
      <select name="breed" id="breed">
        <option value="" hidden></option>
        {breed &&
          breeds.dog.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
      </select>
    </span>
  );
  const breedCatInput = (
    <span>
      <label htmlFor="breed">Raza: </label>
      <select name="breed" id="breed">
        <option value="" hidden></option>
        {breeds &&
          breeds.cat.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
      </select>
    </span>
  );
  const imgInput = (
    // <input
    //   type="file"
    //   id="avatar"
    //   name="avatar"
    //   accept="image/png, image/jpeg"
    // />
    <button class="fileButton">
      <svg
        class="svg-icon"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
      >
        <g
          stroke-width="2"
          stroke-linecap="round"
          stroke="#056dfa"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
          <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
        </g>
      </svg>
      <span class="lable">Archive</span>
    </button>
  );

  return (
    <>
      <div className="popUpBackground" onClick={toggleFlag}></div>
      <div className="popUp">
        <i className="fa-solid fa-xmark" onClick={toggleFlag}></i>
        <h1>Registro de un animal</h1>
        <div className="insertForm">
          <div>
            {contador >= 0 ? animalTypeInput : ""}
            {contador >= 1 ? nameInput : ""}
          </div>
          <div>
            {contador >= 2
              ? breed === "Perro"
                ? breedDogInput
                : breedCatInput
              : ""}
            {contador >= 3 ? ageInput : ""}
          </div>
          <div>
            {contador >= 4 ? genreInput : ""}
            {contador >= 5 ? sizeInput : ""}
          </div>
          <div>
            {contador >= 6 ? illnessInput : ""}
            {contador >= 7 ? descriptionInput : ""}
          </div>
          <div>{contador >= 8 ? imgInput : ""}</div>
        </div>
        <button className="dynamicFormButton" onClick={nextInput}>
          Siguiente
        </button>
      </div>
    </>
  );
}
