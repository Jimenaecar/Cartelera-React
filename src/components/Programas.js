import React, { useState, useEffect } from 'react';
import CardTv from './CardTv';
import { css } from "./css/styles.css";

const Programas = () => {
const[shows,setShows]= useState([]);


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY_TMDB}`)
        .then(response => response.json())
        .then(data => setShows(data.results));
        console.log(shows);
    },[])
    
    return (  
        <div className="">
            <div className="row" style={{display:"flex", flexFlow: "rowWrap", contentAligh: "center"}}>
            {shows.map(item=> <CardTv nameTv ={item.original_name} countryTv ={item.origin_country} vote_averageTv={item.vote_average} imageTv ={item.poster_path} idTv={item.id}
            />) } 
            </div>
        </div>
    );
}
 
export default Programas;
