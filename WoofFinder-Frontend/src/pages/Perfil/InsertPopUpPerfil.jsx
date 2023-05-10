import React, { useEffect, useState } from "react";

export default function InsertPopUpPerfil({ toggleFlag }) {
  const [breeds, setBreeds] = useState();
  const [animalTypeSelected, setAnimalTypeSelected] = useState("");
  const GET_ALL_BREEDS_URL = "http://localhost:8080/pet/breeds";

  useEffect(() => {
    fetch(GET_ALL_BREEDS_URL)
      .then((data) => data.json())
      .then((data) => {
        let breedDog = [];
        let breedCat = [];
        data.map((breed) => {
          breed.animal_type === "Perro"
            ? (breedDog = [...breedDog, [breed.breed_id, breed.breed_type]])
            : (breedCat = [...breedCat, [breed.breed_id, breed.breed_type]]);
        });
        setBreeds({ dog: breedDog, cat: breedCat });
      });
  }, []);

  const handleType = (e) => {
    const value = e.target.value;
    setAnimalTypeSelected(value);
  };
  
  const animalTypeInput = (
    <span>
      <label htmlFor="type">Tipo de animal: </label>
      <select name="type" id="type" onChange={handleType}>
        <option value="" hidden></option>
        <option value="1">Perro</option>
        <option value="2">Gato</option>
      </select>
    </span>
  );

  const nameInput = (
    <span>
      <label htmlFor="name">Nombre: </label>
      <input type="text" id="name" />
    </span>
  );
  const ageInput = (
    <span>
      <label htmlFor="age">Edad: </label>
      <input type="number" id="age" min="0" />
    </span>
  );

  const genreInput = (
    <span>
      <label htmlFor="genre">Género: </label>
      <select name="genre" id="genre">
        <option value="" hidden></option>
        <option value="Macho">Macho</option>
        <option value="Hembra">Hembra</option>
      </select>
    </span>
  );

  const sizeInput = (
    <span>
      <label htmlFor="size">Tamaño: </label>
      <select name="size" id="size">
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

  let breedInput = (
    <span>
      <label htmlFor="breed">Raza: </label>
      <select name="breed" id="breed" disabled>
        <option value="" hidden></option>
      </select>
    </span>
  );

  let breedDogInput = (
    <span>
      <label htmlFor="breed">Raza: </label>
      <select name="breed" id="breed">
        <option value="" hidden></option>
        {breeds &&
          breeds.dog.map((breed) => (
            <option value={breed[0]} key={breed[0]}>
              {breed[1]}
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
            <option value={breed[0]} key={breed[0]}>
              {breed[1]}
            </option>
          ))}
      </select>
    </span>
  );

  function handleFileUpload(event) {
    const inputs = document.querySelectorAll(
      ".insertForm input, .insertForm select, .insertForm textarea"
    );
    let animalType = inputs[0].value;
    animalType === "Perro" ? (animalType = 1) : (animalType = 2);
    const name = inputs[1].value;
    const breed = inputs[2].value;
    const age = inputs[3].value;
    const genre = inputs[4].value;
    const size = inputs[5].value;
    const illness = inputs[6].value;
    const description = inputs[7].value;
    const avatar = inputs[8].files[0];

    if ((name, breed, age, genre, size !== "" && avatar !== undefined)) {
      const formData = new FormData();
      formData.append("animalType", animalType);
      formData.append("name", name);
      formData.append("breed", parseInt(breed));
      formData.append("age", age);
      formData.append("genre", genre);
      formData.append("size", size);
      formData.append("illness", illness);
      formData.append("description", description);
      formData.append("avatar", avatar);

      // Envía el archivo al servidor
      fetch("http://localhost:8080/pet/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      let div = document.createElement("div");
      div.classList.add("alert");
      div.append("¡Tienes que rellenar todos los campos!");
      document.querySelector("body").append(div);
      setTimeout(() => {
        document.querySelector(".alert").remove();
      }, 4000);
    }
  }

  const imgInput = (
    <>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        hidden
        onChange={(e) => {
          const fileChosen = document.getElementById("fileChosen");
          fileChosen.textContent = e.target.files[0].name;
        }}
      />
      <div className="fileButtonContainer">
        <label htmlFor="avatar" className="fileButton">
          <svg
            className="svg-icon"
            width="24"
            viewBox="0 0 24 24"
            height="24"
            fill="none"
          >
            <g
              strokeWidth="2"
              strokeLinecap="round"
              stroke="#a3826c"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
              <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
            </g>
          </svg>
          <span className="lable">Archive</span>
        </label>
        <span id="fileChosen">Selecciona un fichero</span>
      </div>
    </>
  );

  return (
    <>
      <div className="popUpBackground" onClick={toggleFlag}></div>
      <div className="popUp insertPet">
        <i className="fa-solid fa-xmark" onClick={toggleFlag}></i>
        <h1>Registro de un animal</h1>
        <div className="insertForm">
          <div>
            {animalTypeInput}
            {nameInput}
          </div>
          <div>
            {animalTypeSelected === ""
              ? breedInput
              : animalTypeSelected === "1"
              ? breedDogInput
              : breedCatInput}
            {ageInput}
          </div>
          <div>
            {genreInput}
            {sizeInput}
          </div>
          <div>
            {illnessInput}
            {descriptionInput}
          </div>
          <div>{imgInput}</div>
        </div>
        <button className="btnPrimary submitButton" onClick={handleFileUpload}>
          Enviar
        </button>
      </div>
    </>
  );
}
