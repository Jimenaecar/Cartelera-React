import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import CardTv from "./CardTv";
import Personas from "./Personas";


const ShowDetails = () => {
    
     const{idTv}= useParams();
  const [showDetails,setShowDetails] = useState({});
  

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/tv/${idTv}?api_key=${process.env.API_KEY_TMDB}`)
        .then((response) => response.json()) 
        .then((data) => {
          return setShowDetails(data)
    });
    },[])

 return ( 
        <div>
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{showDetails.title}{showDetails.name}</h1>
    <p className="lead">{showDetails.overview}</p>
    <img src={'https://image.tmdb.org/t/p/w500/'+showDetails.poster_path} alt=""/>
  </div>
  <Link to={"/programas-television/"} className="btn bg-primary">Volver a Programas</Link>
</div>
        </div>
     );
}

export default ShowDetails;