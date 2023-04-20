import React, { useEffect, useState } from "react";

export default function FilterDisplay() {
  const [type, setTypes] = useState();
  const [size, setSize] = useState();
  const [first, setfirst] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <h1>Filtros</h1>
      <h3>Tipo</h3>
      <div>
        <section>
          <span>
            <input type="checkbox" name="dog" id="dog" />
            <label htmlFor="dog">Perro</label>
          </span>
          <span>&Lambda;</span>
        </section>
        <input type="checkbox" name="cat" id="cat" />
        <label htmlFor="dog">Gato</label>
      </div>
    </>
  );
}
