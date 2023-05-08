import React, { useEffect, useState } from "react";

export default function FilterDisplay({ types, updateFilterField }) {
  const [breeds, setBreeds] = useState({});
  const [showComponent, setShowComponent] = useState([]);
  const [breedsFlag, setBreedsFlag] = useState(false);

  const GET_ALL_BREEDS = "http://localhost:8080/pet/breeds/adopted";

  useEffect(() => {
    fetch(GET_ALL_BREEDS)
      .then((response) => response.json())
      .then((data) => {
        const breedsList = { ...breeds };
        data.map((element) => {
          if (!breedsList.hasOwnProperty(element.animal_type)) {
            breedsList[element.animal_type] = [element.breed_type];
          } else if (!(element.breed_type in breedsList[element.animal_type])) {
            breedsList[element.animal_type].push(element.breed_type);
          }
          setBreeds(breedsList);
          setBreedsFlag(true);
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e, field, parent) => {
    const { value } = e.target;
    const parentInput = document.querySelector(`input[value="${parent}"]`);
    let breedActivate = false;
    let breedsInputs = document.querySelectorAll(`.breedInput.${value}`);

    if (parent) {
      breedsInputs = document.querySelectorAll(`.breedInput.${parent}`);
      breedsInputs.forEach((element) => {
        if (element.checked === true) {
          breedActivate = true;
        }
      });
      updateFilterField(field, value, parent, breedActivate);
    } else {
      if (["Perro", "Gato"].includes(value)) {
        updateFilterField(field, value, null, null, breeds[value]);
      } else {
        updateFilterField(field, value);
      }
    }
  };

  const dogBreedsInputs =
    breedsFlag &&
    breeds["Perro"].map((breed) => (
      <section className="breed">
        <span>
          <input
            type="checkbox"
            id={breed}
            value={breed}
            className="breedInput Perro"
            checked={types.breed.includes(breed)}
            onChange={(event) => handleInputChange(event, "breed", "Perro")}
          />
          <label htmlFor={breed}>{breed}</label>
        </span>
      </section>
    ));
  const catBreedsInputs =
    breedsFlag &&
    breeds["Gato"].map((breed) => (
      <section className="breed">
        <span>
          <input
            type="checkbox"
            id={breed}
            value={breed}
            className="breedInput Gato"
            checked={types.breed.includes(breed)}
            onChange={(event) => handleInputChange(event, "breed", "Gato")}
          />
          <label htmlFor={breed}>{breed}</label>
        </span>
      </section>
    ));

  const displaySubTypes = (e, index) => {
    const target = e.target;
    const breedsInputsContainer = target.parentElement.nextSibling;
    const parent = e.target.parentElement.firstChild.firstChild;
    console.log(breedsInputsContainer);

    if (target.classList.contains("fa-angle-down")) {
      target.classList.remove("fa-angle-down");
      target.classList.add("fa-angle-up");
      if (breedsInputsContainer.classList.contains("fadeOut")) {
        breedsInputsContainer.classList.remove("fadeOut");
      }
      breedsInputsContainer.classList.add("fadeIn");
    } else {
      target.classList.remove("fa-angle-up");
      target.classList.add("fa-angle-down");
      breedsInputsContainer.classList.remove("fadeIn");
      breedsInputsContainer.classList.add("fadeOut");
    }

    showComponent[index] === true
      ? setTimeout(() => {
          setShowComponent((prevState) => {
            const updateState = [...prevState];
            updateState[index] = false;
            return updateState;
          });
        }, 0)
      : setShowComponent((prevState) => {
          const updateState = [...prevState];
          updateState[index] = true;
          return updateState;
        });
  };
  useEffect(() => {
    console.log(showComponent);
  }, [showComponent]);

  return (
    <>
      <h1>Filtros</h1>
      <h3>Tipo</h3>
      <div>
        <section className="animalType">
          <span>
            <input
              type="checkbox"
              id="dog"
              value="Perro"
              checked={types.animal_type.includes("Perro")}
              onChange={(event) => handleInputChange(event, "animal_type")}
            />
            <label htmlFor="dog">Perro</label>
          </span>
          <i
            className="fa-solid fa-angle-down fa-xl"
            onClick={(e) => {
              displaySubTypes(e, 0);
            }}
            data-animal-type="Perro"
          ></i>
        </section>
        <div className="breedsContainer">
          {showComponent[0] && dogBreedsInputs}
        </div>
        <section className="animalType">
          <span>
            <input
              type="checkbox"
              id="cat"
              value="Gato"
              checked={types.animal_type.includes("Gato")}
              onChange={(event) => handleInputChange(event, "animal_type")}
            />
            <label htmlFor="cat">Gato</label>
          </span>
          <i
            className="fa-solid fa-angle-down fa-xl"
            onClick={(e) => {
              displaySubTypes(e, 1);
            }}
            data-animal-type="Gato"
          ></i>
        </section>
        <div className="breedsContainer">
          {showComponent[1] && catBreedsInputs}
        </div>
        <h3>Tamaño</h3>
        <section>
          <input
            type="checkbox"
            id="big"
            value="Grande"
            checked={types.size.includes("Grande")}
            onChange={(event) => handleInputChange(event, "size")}
          />
          <label htmlFor="big">Grande</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="medium"
            value="Mediano"
            checked={types.size.includes("Mediano")}
            onChange={(event) => handleInputChange(event, "size")}
          />
          <label htmlFor="medium">Mediano</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="small"
            value="Pequeño"
            checked={types.size.includes("Pequeño")}
            onChange={(event) => handleInputChange(event, "size")}
          />
          <label htmlFor="small">Pequeño</label>
        </section>

        <h3>Genero</h3>
        <section>
          <input
            type="checkbox"
            id="male"
            value="Macho"
            checked={types.genre.includes("Macho")}
            onChange={(event) => handleInputChange(event, "genre")}
          />
          <label htmlFor="male">Macho</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="female"
            value="Hembra"
            checked={types.genre.includes("Hembra")}
            onChange={(event) => handleInputChange(event, "genre")}
          />
          <label htmlFor="female">Hembra</label>
        </section>
      </div>
    </>
  );
}
