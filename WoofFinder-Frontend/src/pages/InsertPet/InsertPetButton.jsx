import React from "react";

export default function InsertPetButton({ toggleInsertFlag }) {
  return (
    <button className="insertButton" onClick={toggleInsertFlag}>
      <i className="fa-solid fa-paw"></i>
      <i className="fa-solid fa-plus"></i>
    </button>
  );
}
