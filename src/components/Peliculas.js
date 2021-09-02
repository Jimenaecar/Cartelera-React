import React, { useState, useEffect } from 'react';
import Card from './Card';

const Peliculas = () => {
    const[films,setFilms]= useState([]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => setFilms(data.results));
        
    },[])
   
    
    
    return ( 
        <div className="">
            <div className="row" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {films.map(item=> <Card title ={item.original_title} release_date ={item.release_date} vote_average ={item.vote_average} image ={item.poster_path} id={item.id}
            />) }  
            </div>
           
        </div>
     );
}
 
export default Peliculas;