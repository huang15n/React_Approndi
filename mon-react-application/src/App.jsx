import { useRef } from "react";

function App() {

  const monRef = useRef();


  //  <p>{monRef.current.value}</p> 
  /***
   * Le problème avec votre code est que vous tentez d'afficher la valeur de l'élément de formulaire (monRef.current.value) directement dans le JSX sans attendre que l'utilisateur interagisse avec l'élément. Lors du premier rendu du composant, monRef.current est null, car React n'a pas encore lié la référence (ref) à l'élément DOM. Ainsi, accéder à monRef.current.value avant que l'élément ne soit rendu causera une erreur, car la référence n'est pas encore disponible.
   */
  
  return (
    <>
  
    <input type="text" ref={monRef} />
    <button onClick={() => alert("Nom soumis: " + monRef.current.value) }>Focus</button>
     
    </>
  );
}

export default App;
