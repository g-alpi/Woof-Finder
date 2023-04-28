import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FilterDisplay from "./FilterDisplay";
import InsertPopUp from "./InsertPopUp";
import PetCard from "./PetCard";
import PetPopUp from "./PetPopUp";

export default function Adopt() {
  const [pets, setPets] = useState();
  const [types, setTypes] = useState({});
  const [selectedPetFlag, setSelectedPetFlag] = useState(false);
  const [selectedPetInfo, setSelectedPet] = useState();
  const [insertFlag, setInsertFlag] = useState(false);

  const GET_ALL_PETS = "http://localhost:8080/pet/all";

  useEffect(() => {
    fetch(GET_ALL_PETS)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (data) => {
    const { value, checked } = data;
    setTypes((prevTypes) => ({
      ...prevTypes,
      [value]: checked,
    }));
  };

  const toggleInsertFlag = () => {
    insertFlag === true ? setInsertFlag(false) : setInsertFlag(true);
  };
  const togglePetFlag = () => {
    selectedPetFlag === true
      ? setSelectedPetFlag(false)
      : setSelectedPetFlag(true);
  };
  const selectPet = (data) => {
    setSelectedPet(data);
    setSelectedPetFlag(true);
  };
  let filteredPets;
  if (Object.keys(types).length === 0 || !Object.values(types).includes(true)) {
    filteredPets = pets;
  } else {
    filteredPets = pets.filter(
      (pet) =>
        types[pet.animal_type] === true ||
        types[pet.size] === true ||
        types[pet.genre] === true ||
        types[pet.breed_type] === true
    );
  }

  return (
    <>
      <Header />
      {selectedPetFlag && (
        <PetPopUp selectedPet={selectedPetInfo} toggleFlag={togglePetFlag} />
      )}
      {insertFlag && <InsertPopUp toggleFlag={toggleInsertFlag} />}

      <div className="adopt">
        <div></div>
        <div className="filterContainer">
          <FilterDisplay onInputChange={handleInputChange} />
          <button className="insertButton" onClick={toggleInsertFlag}>
            <i class="fa-solid fa-paw"></i>
            <i class="fa-solid fa-plus"></i>
          </button>
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
