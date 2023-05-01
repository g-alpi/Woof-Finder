import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import FilterDisplay from "./FilterDisplay";
import PetCard from "./PetCard";
import PetPopUp from "./PetPopUp";

export default function Adopt() {
  const [pets, setPets] = useState();
  const [types, setTypes] = useState({});
  const [selectedPetFlag, setFlag] = useState(false);
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

  const handleInputChange = (data) => {
    const { value, checked } = data;
    setTypes((prevTypes) => ({
      ...prevTypes,
      [value]: checked,
    }));
  };

  const toggleFlag = () => {
    selectedPetFlag === true ? setFlag(false) : setFlag(true);
  };
  const selectPet = (data) => {
    setSelectedPet(data);
    setFlag(true);
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
        <PetPopUp selectedPet={selectedPetInfo} toggleFlag={toggleFlag} />
      )}
      <div className="adopt">
        <div className="filterContainer">
          <FilterDisplay onInputChange={handleInputChange} />
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
