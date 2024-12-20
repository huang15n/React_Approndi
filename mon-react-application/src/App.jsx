import { createBrowserRouter, Link, NavLink, RouterProvider } from "react-router-dom";
// Composant principal

function PageErreur() {
  return (
    <div>
      <h1>404 - Page introuvable</h1>
    </div>
  );
}


function Accueil() {
  return (
    <div>
      <h1>Accueil</h1>
     <NavLink to="/produits">Produits</NavLink>
    </div>
  );
}

function Produits() {
  return (
    <div>
      <h1>Produits</h1>
      <NavLink to="/produits/chercher">Chercher</NavLink>
    </div>
  );
}

const routeur = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <PageErreur />,
  },
  {
    path: "/produits",
    element: <Produits />,
    errorElement: <PageErreur />,
  },
   
])

export default function App() {
  return (

    <RouterProvider router={routeur} />
    
    
    
  );
}
