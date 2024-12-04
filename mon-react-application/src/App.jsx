import { useState } from "react";
import { useRef } from "react";
function App() {
  const nomRef = useRef();
  const prenomRef = useRef();
  const ageRef = useRef();  
 
  
 
  return (
    <>

    <h1> Exemple de useRef </h1>
    <input type='text' ref={nomRef} />
    <input type='text' ref={prenomRef} />
    <input type='text' ref={ageRef} />
    <button onClick={() => alert("Nom: " + nomRef.current.value + " Prenom: " + prenomRef.current.value + " Age: " + ageRef.current.value)}>Focus</button>
    
 
 
    </>
  );
  
  
 
}

export default App;
