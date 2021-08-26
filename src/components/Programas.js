import React, { useState, useEffect } from 'react';
import Card from './Card';

const Programas = () => {
const[shows,setShows]= useState([]);


    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=66fe2d4dcf98813e405cc05181238577")
        .then(response => response.json())
        .then(data => setShows(data.results));
        console.log(shows);
    },[])
    
    return (  
        <div className="row p-2">
            <div className="col-3 p-5" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {shows.map(item=> <Card name ={item.original_name} country ={item.origin_country} vote_average={item.vote_average} image ={item.poster_path}
            />) } 
            </div>
        </div>
    );
}
 
export default Programas;
