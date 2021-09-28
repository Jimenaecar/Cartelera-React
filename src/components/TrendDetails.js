import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import Trending from "../views/Trending";
import CardTrend from "./CardTrend";

const TrendDetails = () => {
    
  const{idTrend}= useParams();
  const [trendDetails,setTrendDetails] = useState({});

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${idTrend}?api_key=66fe2d4dcf98813e405cc05181238577`)
        .then((response) => response.json())
        .then((data) => {
          return setTrendDetails(data);
    });
    },[])

  
    return ( 
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "2rem", padding: "1rem" }}>
  <div className="row g-0">
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb">
      <Link to={"/"} className="breadcrumb-item" style={{fontFamily:"Montserrat", color:"black"}}>Inicio</Link>
        <li className="breadcrumb-item active" style={{fontFamily:"Montserrat", fontWeight:"bold", color:"black",}} aria-current="page">{trendDetails.title}{trendDetails.name}</li>
      </ol>
    </nav>
    <div className="col-md-4">
      <img src={'https://image.tmdb.org/t/p/w500/'+trendDetails.poster_path} className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <h1 className="card-title" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>{trendDetails.title}{trendDetails.name}</h1>
        <p className="card-text" style={{fontFamily:"Open Sans Regular"}}>{trendDetails.overview}</p>
        <Link to={"/"} className="btn btn-outline-success" style={{fontFamily:"Montserrat", fontWeight:"bolder"}}>Volver al Inicio</Link> 
      </div>
      
    </div>
  </div>
</div> 
     );
}

export default TrendDetails;