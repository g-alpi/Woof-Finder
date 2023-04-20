import React, { useEffect, useState } from "react";
import FilterDisplay from "./FilterDisplay";
import PetCard from "./PetCard";

export default function Adopt() {
  const [pets, setPets] = useState();
  const GET_ALL_PETS = "http://localhost:8080/pet/all";
  useEffect(() => {
    fetch(GET_ALL_PETS)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => console.error(error));
  }, []);

  let filteredPets = pets;

  return (
    <div className="adopt">
      <div className="filterContainer">
        <FilterDisplay />
      </div>
      <div className="petsContainer">
        {filteredPets && filteredPets.map((pet) => <PetCard content={pet} />)}
      </div>
    </div>
  );
}
