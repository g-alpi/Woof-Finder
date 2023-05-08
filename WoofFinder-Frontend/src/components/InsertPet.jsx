import React, { useState } from "react";
import InsertPetButton from "../pages/InsertPet/InsertPetButton";
import InsertPopUp from "../pages/InsertPet/InsertPopUp";

export default function InsertPet() {
  const [insertFlag, setInsertFlag] = useState(false);

  const toggleInsertFlag = () => {
    insertFlag === true ? setInsertFlag(false) : setInsertFlag(true);
  };
  return (
    <>
      {insertFlag && <InsertPopUp toggleFlag={toggleInsertFlag} />}
      <InsertPetButton toggleInsertFlag={toggleInsertFlag} />
    </>
  );
}
