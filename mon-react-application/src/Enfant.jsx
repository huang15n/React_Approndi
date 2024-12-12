  

  import { useEffect, useState } from "react";
function  Enfant(props) {

  const [filmsData, definirfilmsData] = useState([]); 
  
  useEffect(() => {
    console.log(props);
    definirfilmsData(props.films); 
    console.log("Enfant rendu"); 
    console.log("data:", filmsData);
    
  }, [props.films]);  

  return (

    <>
    {Array.isArray(filmsData) && filmsData.map(film => {
      return (
        <div key={film.id}>
          <p>{film.titre}</p>
          <p>{film.date}</p>
          <p>{film.description}</p>
        </div>
      );
    })}
   
   
    </>
     

  )
         
}


export default Enfant;