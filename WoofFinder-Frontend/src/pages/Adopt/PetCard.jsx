import React from "react";

export default function PetCard({ content }) {
  const img = `/images/default${content.animal_type}.png`;
  return (
    <div className="petCard" key={content.pets_id}>
      <img src={img} alt={content.pet_name} />
      <p>{content.pet_name}</p>
      <div className="petPropierties">
        <div>
          <span>{content.age} años</span>
          <span>{content.genre}</span>
          <span>{content.size}</span>
        </div>
        <div>
          <span>{content.breed_type}</span>
          <span>{content.genre}</span>
          <span>{content.pet_status}</span>
        </div>
      </div>
    </div>
  );
}
