import { useEffect, useState } from "react";
import Enfant from "./Enfant";

export default function App() {
  const [filmsData, definirfilmsData] = useState([]);
  const [estTelecharge, definirEstTelecharge] = useState(false);
  const [erreur, definirErreur] = useState(null);

  const requetteFilms = async () => {
    try {
      definirEstTelecharge(true);
      const reponse = await fetch("https://swapi.dev/api/films/");
      const data = await reponse.json();

      if (reponse.status !== 200) {
        definirErreur(data.detail || "Erreur inconnue");
        definirEstTelecharge(false);
        throw new Error(data.detail);
      }

      const transformerData = data.results.map((film) => ({
        id: film.episode_id,
        titre: film.title,
        date: film.created,
        description: film.opening_crawl,
      }));

      console.log(transformerData);
      definirfilmsData(transformerData);
      definirErreur(null); // Réinitialise l'erreur s'il n'y en a plus
    } catch (erreur) {
      console.error(erreur);
      definirErreur(erreur.message || "Erreur lors du téléchargement.");
    } finally {
      definirEstTelecharge(false);
    }
  };

  useEffect(() => {
    // Appeler la fonction une seule fois lors du chargement
    requetteFilms();
  }, []); // Aucun tableau de dépendances requis ici

  return (
    <>
         {erreur ? (
        <p>{erreur}</p>
      ) : estTelecharge ? (
        <p>Chargement des Films...</p>
      ) : (
        <Enfant films={filmsData}></Enfant>
      )}
    </>
  );
}
