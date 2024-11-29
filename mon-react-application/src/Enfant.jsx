
import { useState } from "react";
export default function Enfant(props) {

  // États séparés pour chaque champ
  const [nom, definirNom] = useState("");
  const [prenom, definirPrenom] = useState("");

  const gesttionaireSoumission = (e) => {
    e.preventDefault(); // Empêcher le comportement de soumission par défaut
    props.envoyerData({nom, prenom});
  };


 


    return (
        <div>
           <input type="text" value={nom} onChange={(e) => definirNom(e.target.value)} />
           <input type="text" value={prenom} onChange={(e) => definirPrenom(e.target.value)} />
          <button onClick={gesttionaireSoumission}>Soumettre</button>
        </div>
    );
}