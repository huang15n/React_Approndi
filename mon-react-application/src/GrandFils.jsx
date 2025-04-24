import React, { useContext } from "react";
import { Contexte } from "./App";

const GrandFils = () => {
  const liste = useContext(Contexte);

  return (
    <div>
      <h3>GrandFils</h3>
      {liste.map((item) => (
        <p key={item.id}>
          {item.id} | {item.nom}
        </p>
      ))}
    </div>
  );
};

export default GrandFils;
