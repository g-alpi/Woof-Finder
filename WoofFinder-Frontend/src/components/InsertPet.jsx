import React, { useState } from "react";
import InsertPetButton from "../pages/InsertPet/InsertPetButton";
import InsertPopUp from "../pages/InsertPet/InsertPopUp";

export default function InsertPet() {
  const [insertFlag, setInsertFlag] = useState(false);

  const toggleInsertFlag = () => {
    
    if (localStorage.length > 0) {
      insertFlag ? setInsertFlag(false) : setInsertFlag(true);
    } else {
      let div = document.createElement("div");
      div.classList.add("alert");
      div.append("¡Es necesario iniciar sesión!");

      let link = document.createElement("a");
      link.setAttribute("href", "/Login");
      link.innerText = "Iniciar sesión";

      div.appendChild(document.createElement("br"));
      div.appendChild(link);

      document.querySelector("body").append(div);

      setTimeout(() => {
        document.querySelector(".alert").remove();
      }, 4000);
    }
  };

  return (
    <>
      {insertFlag && <InsertPopUp toggleFlag={toggleInsertFlag} />}
      <InsertPetButton toggleInsertFlag={toggleInsertFlag} />
    </>
  );
}
