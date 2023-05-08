import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import InsertPet from "../../components/InsertPet";
import InsertPopUp from "../InsertPet/InsertPopUp";
import FilterDisplay from "./FilterDisplay";
import PetCard from "./PetCard";
import PetPopUp from "./PetPopUp";

export default function Adopt() {
  const [pets, setPets] = useState([]);
  const [types, setTypes] = useState({
    animal_type: [],
    breed: [],
    size: [],
    genre: [],
  });
  const [selectedPetFlag, setSelectedPetFlag] = useState(false);
  const [selectedPetInfo, setSelectedPet] = useState();

  const GET_ALL_PETS = "http://localhost:8080/pet/all";

  useEffect(() => {
    fetch(GET_ALL_PETS)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const updateFilterField = (field, value, parent) => {
    if (parent) {
      const parentValues = types["animal_type"].includes(parent)
        ? types["animal_type"].filter((v) => v !== parent)
        : [...types["animal_type"], parent];
      setTypes((prevFilter) => ({
        ...prevFilter,
        animal_type: parentValues,
      }));
    }
    const updatedValues = types[field].includes(value)
      ? types[field].filter((v) => v !== value)
      : [...types[field], value];

    setTypes((prevFilter) => ({
      ...prevFilter,
      [field]: updatedValues,
    }));
  };

  const togglePetFlag = () => {
    setSelectedPetFlag((prevFlag) => !prevFlag);
  };

  const selectPet = (data) => {
    setSelectedPet(data);
    setSelectedPetFlag(true);
  };

  let filteredPets =
    pets &&
    pets.filter((pet) => {
      return (
        (!types.animal_type.length ||
          types.animal_type.includes(pet.animal_type)) &&
        (!types.breed.length || types.breed.includes(pet.breed_type)) &&
        (!types.size.length || types.size.includes(pet.size)) &&
        (!types.genre.length || types.genre.includes(pet.genre))
      );
    });

  useEffect(() => {
    console.log(types);
    console.log(pets);
  }, [types]);

  return (
    <>
      <Header />
      <InsertPet />
      {selectedPetFlag && (
        <PetPopUp selectedPet={selectedPetInfo} toggleFlag={togglePetFlag} />
      )}

      <div className="adopt">
        <div></div>
        <div className="filterContainer">
          <FilterDisplay types={types} updateFilterField={updateFilterField} />
        </div>
        <div className="petsContainer">
          {filteredPets &&
            filteredPets.map((pet, index) => (
              <PetCard content={pet} index={index} setPet={selectPet} />
            ))}
        </div>
      </div>
    </>
  );
}
