import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import CardRate from "./CardRate";
import RatingTv from "../views/RatingTv";



const RateTvDetails = () => {
    
  const{idRate}= useParams();
  const [rateDetails,setrateDetails] = useState({});

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/tv/popular?${idRate}api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
        .then((response) => response.json())
        .then((data) => {
          return setrateDetails(data)
    });
    },[])

  
    return ( 
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "2rem", padding: "1rem" }}>
  <div className="row g-0">
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb">
      <Link to={"/"} className="breadcrumb-item" style={{fontFamily:"Montserrat", color:"black"}}>Inicio</Link>
        <li className="breadcrumb-item active" style={{fontFamily:"Montserrat", fontWeight:"bold", color:"black",}} aria-current="page">{rateDetails.title}{rateDetails.name}</li>
      </ol>
    </nav>
    <div className="col-md-4">
      <img src={'https://image.tmdb.org/t/p/w500/'+rateDetails.poster_path} className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h1 className="card-title" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>{rateDetails.title}{rateDetails.name}</h1>
        <p className="card-text" style={{fontFamily:"Open Sans Regular"}}>{rateDetails.overview}</p>
        <Link to={"/"} className="btn btn-outline-success" style={{fontFamily:"Montserrat", fontWeight:"bolder"}}>Volver al Inicio</Link> 
      </div>
      
    </div>
  </div>
</div> 
     );
}

export default RateTvDetails;