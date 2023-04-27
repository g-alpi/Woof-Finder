import React, { useEffect, useState } from "react";

export default function FilterDisplay(props) {
  const [breeds, setBreeds] = useState({});
  const [showComponent, setShowComponent] = useState([]);

  const GET_ALL_BREEDS = "http://localhost:8080/pet/breeds";

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
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (e, parent) => {
    const { value, checked } = e.target;
    const breedsInputs = document.querySelectorAll(`.breedInput.${parent}`);
    let breedActivate = false;
    breedsInputs.forEach((element) => {
      if (element.checked === true) {
        breedActivate = true;
      }
    });
    if (parent) {
      breedActivate === true
        ? props.onInputChange({
            value: parent,
            checked: false,
          })
        : props.onInputChange({
            value: parent,
            checked: true,
          });
    }
    props.onInputChange({
      value: value,
      checked: checked,
    });
  };

  const displaySubTypes = (e, index) => {
    const target = e.target;
    const breeds = target.parentElement.nextSibling;

    if (target.classList.contains("fa-angle-down")) {
      target.classList.remove("fa-angle-down");
      target.classList.add("fa-angle-up");
      if (breeds.classList.contains("fadeOut")) {
        breeds.classList.remove("fadeOut");
      }
      breeds.classList.add("fadeIn");
    } else {
      target.classList.remove("fa-angle-up");
      target.classList.add("fa-angle-down");
      breeds.classList.remove("fadeIn");
      breeds.classList.add("fadeOut");
    }

    setShowComponent((prevState) => {
      const updateState = [...prevState];
      updateState[index] === true
        ? (updateState[index] = false)
        : (updateState[index] = true);
      return updateState;
    });
  };

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
              onInput={handleInputChange}
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
        <div>
          {showComponent[0] &&
            breeds.Perro.map((breed) => (
              <section className="breed">
                <input
                  type="checkbox"
                  id={breed}
                  value={breed}
                  className="breedInput Perro"
                  onInput={(e) => {
                    handleInputChange(e, "Perro");
                  }}
                />
                <label htmlFor={breed}>{breed}</label>
              </section>
            ))}
        </div>
        <section className="animalType">
          <span>
            <input
              type="checkbox"
              id="cat"
              value="Gato"
              onInput={handleInputChange}
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
        <div>
          {showComponent[1] &&
            breeds.Gato.map((breed) => (
              <section className="breed">
                <input
                  type="checkbox"
                  id={breed}
                  value={breed}
                  className="breedInput Gato"
                  onInput={(e) => {
                    handleInputChange(e, "Gato");
                  }}
                />
                <label htmlFor={breed}>{breed}</label>
              </section>
            ))}
        </div>
        <h3>Tamaño</h3>
        <section>
          <input
            type="checkbox"
            id="big"
            value="Grande"
            onInput={handleInputChange}
          />
          <label htmlFor="big">Grande</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="medium"
            value="Mediano"
            onInput={handleInputChange}
          />
          <label htmlFor="medium">Mediano</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="small"
            value="Pequeño"
            onInput={handleInputChange}
          />
          <label htmlFor="small">Pequeño</label>
        </section>

        <h3>Genero</h3>
        <section>
          <input
            type="checkbox"
            id="male"
            value="Macho"
            onInput={handleInputChange}
          />
          <label htmlFor="male">Macho</label>
        </section>
        <section>
          <input
            type="checkbox"
            id="female"
            value="Hembra"
            onInput={handleInputChange}
          />
          <label htmlFor="female">Hembra</label>
        </section>
      </div>
    </>
  );
}
