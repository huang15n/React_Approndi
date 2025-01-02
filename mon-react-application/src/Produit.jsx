import { Link } from "react-router-dom";

const Produit = ({ produits }) => {
  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            <Link to={`/produits/${produit.id}`}>{produit.nom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produit;