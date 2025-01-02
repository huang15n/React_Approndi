import { useParams } from "react-router-dom";

const ProduitDetaille = ({ produits }) => {
  const { id } = useParams();
  const produit = produits.find((produit) => produit.id === parseInt(id, 10)); // Assurez-vous de convertir `id` en entier

  if (!produit) {
    return <p>Produit introuvable.</p>; // Gestion des cas où l'ID ne correspond pas
  }

  return (
    <div>
      <h1>Détails du produit</h1>
      <p>Nom : {produit.nom}</p>
      <p>Catégorie : {produit.categorie}</p>
      <p>Prix : {produit.prix}€</p>
      <p>Description : {produit.description}</p>
    </div>
  );
};

export default ProduitDetaille;