import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Personas from "./Personas";
import CardPersonas from "./CardPersonas";


const PersonasDetails = () => {
    
     const{idPers}= useParams();
  const [personasDetails,setPersonasDetails] = useState({});
  

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${idPers}?api_key=${process.env.API_KEY_TMDB}`)
        .then((response) => response.json()) 
        .then((data) => {
          return setPersonasDetails(data)
    });
    },[])


 return ( 
        <div>
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{personasDetails.name}</h1>
    <p className="lead">{personasDetails.biography}</p>
    <img src={'https://image.tmdb.org/t/p/w500/'+personasDetails.profile_path} alt=""/>
  </div>
  <Link to={"/personas/"} className="btn bg-primary">Volver a Personas</Link>
</div>
        </div>
     );
}

export default PersonasDetails;