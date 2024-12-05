import { useEffect, useState } from "react";

function App() {
  const [afficher, definirAfficher] = useState(true);

  return (
    <>
      <button onClick={() => definirAfficher(!afficher)}>Afficher / Cacher</button>
      {afficher && <MonComposant />}
    </>
  );
}

function MonComposant() {
  useEffect(() => {
    console.log("Montage : MonComposant est monté.");

    return () => {
      console.log("Démontage : MonComposant est supprimé.");
    };
  }, []);

  return <h1>Bonjour, je suis un composant !</h1>;
}

export default App;
