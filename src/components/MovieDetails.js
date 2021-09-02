import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";


const MovieDetails = () => {
  const{id}= useParams();
  const [movieDetails,setMovieDetails] = useState({});

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY_TMDB}`)
        .then((response) => response.json())
        .then((data) => {
          return setMovieDetails(data)
    });
    },[])

  
    return ( 
        <div>
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{movieDetails.title}</h1>
    <p className="lead">{movieDetails.overview}</p>
    <img src={'https://image.tmdb.org/t/p/w500/'+movieDetails.poster_path} alt=""/>
  </div>
  <Link to={"/peliculas"} className="btn bg-primary">Volver a Peliculas</Link>
</div>
        </div>
     );
}
 
export default MovieDetails;