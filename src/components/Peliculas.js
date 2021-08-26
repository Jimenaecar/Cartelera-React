import React, { useState, useEffect } from 'react';
import Card from './Card';

const Peliculas = () => {
    const[films,setFilms]= useState([]);


    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=66fe2d4dcf98813e405cc05181238577")
        .then(response => response.json())
        .then(data => setFilms(data.results));
        console.log(films);
    },[])
   
    
    
    return ( 
        <div className="row p-2">
            <div className="col-3 p-5" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {films.map(item=> <Card title ={item.original_title} release_date ={item.release_date} vote_average ={item.vote_average} image ={item.poster_path}
            />) }  
            </div>
           
        </div>
     );
}
 
export default Peliculas;