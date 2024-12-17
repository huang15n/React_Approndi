import { useSelector, useDispatch } from "react-redux";
// Importer les actions à partir du fichier stockage.js
import { compteurActions } from './stockage'; 

function Enfant() {
  // Sélectionner l'état du compteur et de la visibilité
  const compteur = useSelector((state) => state.compteur);
  const visible = useSelector((state) => state.visible);

  // Obtenir la fonction dispatch pour envoyer des actions
  const dispatch = useDispatch();

  return (
    <>
      {/* Afficher le compteur seulement si visible est true */}
      {visible && <p>Le compteur dans l'enfant : {compteur}</p>}
      
      {/* Bouton pour incrémenter de 5 */}
      <button onClick={() => dispatch(compteurActions.INCREMENTER_CINQ())}>
        Incrementer Compteur de 5
      </button>
      
      {/* Bouton pour changer la visibilité */}
      <button onClick={() => dispatch(compteurActions.CHANGER_VISIBLE())}>
        Changer Visible
      </button>
    </>
  );
}

export default Enfant;
