import React from "react";

export default function PetCard({ content, setPet }) {

  let img = `/images/${content.avatar_path}`;
  
  if (content.avatar_path === null || content.avatar_path === undefined) {
    img = `/images/default${content.animal_type}.png`;
  }
  
  const handleClick = (e) => {
    setPet(content);
  };

  return (
    <div className="petCard" key={content.pets_id} onClick={handleClick}>
      <img src={img} alt={content.pet_name} />
      <p>{content.pet_name}</p>
      <div className="petPropierties">
        <div>
          <span>
            {content.age <= 1 ? `${content.age} año` : `${content.age} años`}
          </span>
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
