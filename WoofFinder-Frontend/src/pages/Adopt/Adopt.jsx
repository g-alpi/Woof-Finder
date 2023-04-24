import React, { useEffect, useState } from "react";
import FilterDisplay from "./FilterDisplay";
import PetCard from "./PetCard";

export default function Adopt() {
  const [pets, setPets] = useState();
  const [types, setTypes] = useState({});

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
    <div className="adopt">
      <div className="filterContainer">
        <FilterDisplay onInputChange={handleInputChange} />
      </div>
      <div className="petsContainer">
        {filteredPets && filteredPets.map((pet) => <PetCard content={pet} />)}
      </div>
    </div>
  );
}
