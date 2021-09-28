import React, { useState, useEffect } from 'react';
import Card from '../components/Card';


const Peliculas = () => {
    const[films,setFilms]= useState([]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=66fe2d4dcf98813e405cc05181238577`)
        .then(response => response.json())
        .then(data => setFilms(data.results));
        
    },[])
   

    return ( 
        <div className="" style={{margin: "3rem", marginTop:"0.5rem",marginBottom:"1rem" ,padding: "3rem" }}>
            <div className="row" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {films.map(item=> <Card title ={item.original_title} release_date ={item.release_date} vote_average ={item.vote_average} image ={item.poster_path} id={item.id}
            />) }  
            </div>
           
        </div>
     );
}
 
export default Peliculas;