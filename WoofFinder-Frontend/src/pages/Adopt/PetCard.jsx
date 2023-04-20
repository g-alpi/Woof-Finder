import React from "react";

export default function PetCard({ content }) {
  const img = `/images/default.jpg`;
  return (
    <div className="petCard">
      <img src={img} alt={content.pet_name} />
      <h1>{content.pet_name}</h1>
      <div className="petPropierties">
        <div>
          <span>{content.age}</span>
          <span>{content.genre}</span>
          <span>{content.size}</span>
        </div>
        <div>
          <span>{content.age}</span>
          <span>{content.genre}</span>
          <span>{content.size}</span>
        </div>
      </div>
    </div>
  );
}
