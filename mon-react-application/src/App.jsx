import React, { createContext } from "react";
import Enfant from "./Enfant";

const Contexte = createContext();

const liste = [
  { id: 1, nom: "Produit 1" },
  { id: 2, nom: "Produit 2" },
  { id: 3, nom: "Produit 3" },
];

const App = () => {
  return (
    <Contexte.Provider value={liste}>
      <div>
        <h1>Mon Application React</h1>
        <Enfant />
      </div>
    </Contexte.Provider>
  );
};

export { Contexte }; // Export pour utilisation dans d'autres fichiers
export default App;
